type DataType = "DECIMAL" | "INTEGER" | "TEXT" | "BOOLEAN" | "INTEGER_OR_DECIMAL" | "NULL" | "undefined"
type OperationType = "PROJECT" | "PRIMITIVE_OPERATION" | "COMPOSITE_OPERATION" | "CONDITIONAL_OPERATION" | "LOOP_OPERATION" | "LOOP_BODY_OPERATION" | "LOOP_INIT_OPERATION" | "CLIENT_SIDE_CONSTRAINT_OPERATION"
type FlowState = "BOOT_SOURCE" | "REF_SOURCE" | "BOOT_SINK" | "REF_SINK" | "UNBOUND";

type DATA_MAP = {
  "DECIMAL": number;
  "INTEGER": number;
  "TEXT": string;
  "BOOLEAN": boolean;
  "INTEGER_OR_DECIMAL": number;
  "NULL": null;
  "undefined": never
}

interface Position {
  x: number;
  y: number;
}

type DataTypeMap<T extends DataType> = {
  [P in T]: DATA_MAP[P];
}

type RequiredSome<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;


export interface Variable<T extends DataType> {
  name: string;
  primitive_name?: string;
  reference_id?: string;
  global_constant?: string;
  "type"?: T;
  shape?: number[];
  // make data based on type mapped to DATA_MAP
  data?: DATA_MAP[T];
  flow_state?: FlowState;
}

export type Node = {
  id: string;
  children: Node[];
  parents: Node[];
  op?: Operation;
};

type RequiredPrimVariable<T extends DataType> = RequiredSome<Variable<T>, "primitive_name">

interface LinkEndpoint {
  operation: string;
  data: string;
}

export interface Link {
  source: LinkEndpoint;
  sink: LinkEndpoint;
  control_points?: Position[]
}

export interface Operation {
  name: string;
  primitive_name?: string;
  position?: Position;
  aliases?: string[];
  type: OperationType;
  inputs: Variable<DataType>[];
  outputs: Variable<DataType>[];
  asserations?: string[];
  description?: string;
  // examples not included
  operations?: Operation[];
  links?: Link[];
  // conditions not included
  // operations_if_true and operations_if_false not included
  // links_if_true and links_if_false not included
  global_constants?: Variable<any>[];
  // repeat_until_false_condition not included

}

export interface Composite extends Operation {
  type: "COMPOSITE_OPERATION";
}
