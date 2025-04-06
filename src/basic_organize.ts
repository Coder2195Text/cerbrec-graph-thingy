// basic organize for fixing default graphs without positions

import { Composite } from "./types";

export function basic_organize(graph: Composite) {
  if (!graph.operations) return;
  for (const node of graph.operations) {
    if (
      !node.position ||
      node.position.x === undefined ||
      node.position.y === undefined
    ) {
      node.position = {
        x: Math.random() * 2000,
        y: Math.random() * 1000,
      };
    }
  }
}
