import { Link, Node, Operation } from "./types";
import { example } from "./example";


/**
* THIS ALGORITHM WILL NOT WORK FOR CYCLIC GRAPHS!!!
  */
export const GAP_SIZE = 325;

function interleave<T, A>(arr: T[], thing: A): (T | A)[] {
  return ([] as (T | A)[]).concat(...arr.map(n => [n, thing])).slice(0, -1)
}


export function height(op: Operation) {
  return (Math.max(op.inputs.length, op.outputs.length) + 1) * 50;
}


export function organize(composite: Operation) {
  const nodes: { [key: string]: Node } = {
    "global_input": {
      id: "global_input",
      children: [],
      parents: [],
      op: {
        position: { x: 0, y: 0 },
        name: "global_input",
        inputs: composite.inputs,
        outputs: composite.inputs,
        type: "PRIMITIVE_OPERATION"
      }
    },
    global_output: {
      id: "global_output",
      children: [],
      parents: [],
      op: {
        position: { x: 0, y: 0 },
        name: "global_output",
        inputs: composite.outputs,
        outputs: composite.outputs,
        type: "PRIMITIVE_OPERATION"
      }
    }
  };





  let visited: { [key: string]: boolean } = {};

  // first pass add nodes
  for (const op of composite.operations || []) {
    let operation = op as Operation;
    operation.position = {
      x: 0,
      y: 0
    };


    nodes[operation.name] = {
      id: operation.name,
      children: [],
      parents: [],
      op: operation
    }
  }



  // second pass, link together
  for (const link of composite.links || []) {
    const parent = nodes[link.source.operation == "this" ? "global_input" : link.source.operation]
    const child = nodes[link.sink.operation == "this" ? "global_output" : link.sink.operation]
    if (!parent.children.includes(child)) parent.children.push(child);
    if (!child.parents.includes(parent)) child.parents.push(parent);
  }

  const node_array = Object.values(nodes)

  const roots: Node[] = node_array.filter(node => node.parents.length == 0);

  const COLUMNS = Math.max(...roots.map((root) => {
    visited = {};
    return depth(root);
  })) + 1;

  function depth(node: Node): number {
    if (visited[node.id]) return 0;
    else visited[node.id] = true;
    if (node.children.length === 0) return 0;
    return Math.max(...node.children.map(depth)) + 1;

  }


  const grid: (Node)[][] = new Array(COLUMNS);

  for (let i = 0; i < COLUMNS; i++) {

    grid[i] = [];
  }

  // start with the ends


  let root_nodes = roots;
  let column = 0;
  visited = {};

  let column_lookup: { [key: string]: number } = {};

  while (root_nodes.length) {
    let current_y = 0;
    let new_roots = [] as Node[];
    for (let i = 0; i < root_nodes.length; i++) {
      const n = root_nodes[i];
      visited[n.id] = true;

      if (!grid[column]) {
        grid[column] = [];
      }

      grid[column][i] = n;
      column_lookup[n.id] = column;
      if (n.op) {
        n.op.position!.x = GAP_SIZE * (2 * column + 1);
        n.op.position!.y = current_y;
        current_y += height(n.op) + GAP_SIZE;
      }

      new_roots.push(...n.children.filter(child => child.parents.every(parent => visited[parent.id])));
    }

    root_nodes = new_roots;
    // console.log(new_roots, "new roots", column);

    column++;
  }

  grid[0] = grid[0].filter(n => n.id != "global_input");

  // TODO: arange the node links nicely;
  //
  //
  const gaps: [number, number][][] = grid.map((column, i) => {
    const gaps = [] as [number, number][];
    for (let j = 0; j < column.length; j++) {
      const node = column[j];
      const next_node = column[j + 1];
      if (!node.op) continue;


      gaps.push([node.op.position!.y + height(node.op) + GAP_SIZE / 2, next_node?.op ? next_node.op.position!.y : 1000000]);
    }
    return gaps;
  });

  function calculate_y(op: Operation, current_input: number) {
    return calcuate_y_raw(op.position!.y, current_input);
  }

  function calcuate_y_raw(y: number, current_input: number) {
    return y + current_input * 50 + 75;
  }

  column_lookup["global_input"] = -1;
  delete column_lookup["global_output"];

  let removedInputOffset = grid[0][0]?.op?.position?.y;
  if (removedInputOffset) {
    for (let i = 0; i < grid[0].length; i++) {
      const op = grid[0][i].op;

      // Check if op exists before accessing op.position.y
      if (op && op.position && op.position.y) {
        op.position.y -= removedInputOffset;
      }
    }
  }




  for (const linkRaw of composite.links || []) {
    let source_op_name = linkRaw.source.operation == "this" ? "global_input" : linkRaw.source.operation;
    let sink_op_name = linkRaw.sink.operation == "this" ? "global_output" : linkRaw.sink.operation;
    const link = linkRaw as Link;
    let col_from = column_lookup[source_op_name];
    let col_to = column_lookup[sink_op_name];
    // if (Math.abs(col_to - col_from) <= 1) continue;
    link.control_points = []



    let from_op = nodes[source_op_name].op!;
    // get index of the beginning of the wire
    let outIndex = -1;
    for (let i = 0; i < from_op.outputs.length; i++) {
      if (from_op.outputs[i].name == link.source.data) {
        outIndex = i;
        break;
      }
    }
    if (outIndex == -1) console.log("error", from_op.outputs, link.source.data)
    let current_y = calculate_y(from_op, outIndex)

    let to_op = nodes[sink_op_name].op!;

    //get index of end of the wire
    let inIndex = -1;
    for (let i = 0; i < to_op.inputs.length; i++) {
      if (to_op.inputs[i].name == link.sink.data) {
        inIndex = i;
        break;
      }
    }
    console.assert(outIndex !== -1, outIndex, link)
    // console.log(linkRaw)

    linkRaw.control_points = [{
      x: from_op.position!.x + 1.5 * GAP_SIZE,
      y: current_y
    }, {
      x: from_op.position!.x + 1.5 * GAP_SIZE,
      y: to_op.name == "global_output" ? calcuate_y_raw(0, inIndex) : calculate_y(to_op, inIndex)
    }]

  }




  console.log(nodes["global_input"],);
  // console.log(nodes);
  //
  console.log(nodes)

  console.log(gaps)

  console.log(composite)
  return composite;
}



organize(example);