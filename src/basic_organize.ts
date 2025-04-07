// basic organize for fixing default graphs without positions

import { Composite } from "./types";

export function basic_organize(graph: Composite): Composite {
  if (!graph.operations) return graph;
  for (const node of graph.operations) {
    if (
      !node.position ||
      // double == to check for null as well
      node.position.x == undefined ||
      node.position.y == undefined
    ) {
      node.position = {
        x: Math.random() * 2000,
        y: Math.random() * 1000,
      };
    }
  }

  return graph;
}
