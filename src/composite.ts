export const composite = {
  "name": "Composite_2165f7c8 (1).json",
  "type": "COMPOSITE_OPERATION",
  "inputs": [
    {
      "name": "input_0",
      "primitive_name": "input_0"
    }
  ],
  "outputs": [
    {
      "name": "output_0",
      "primitive_name": "output_0",
      "flow_state": "UNBOUND"
    },
    {
      "name": "output_1",
      "primitive_name": "output_1",
      "flow_state": "UNBOUND"
    },
    {
      "name": "output_2",
      "primitive_name": "output_2",
      "flow_state": "UNBOUND"
    },
    {
      "name": "output_3",
      "primitive_name": "output_3",
      "flow_state": "UNBOUND"
    }
  ],
  "operations": [
    {
      "name": "Op_7d182440",
      "primitive_name": "modulo",
      "type": "PRIMITIVE_OPERATION",
      "position": {
        "x": 910,
        "y": 230
      },
      "inputs": [
        {
          "name": "left_operand",
          "primitive_name": "left_operand"
        },
        {
          "name": "right_operand",
          "primitive_name": "right_operand"
        }
      ],
      "outputs": [
        {
          "name": "result",
          "primitive_name": "result",
          "flow_state": "UNBOUND"
        }
      ]
    },
    {
      "name": "Op_c4c91a8b",
      "primitive_name": "is_nan",
      "type": "PRIMITIVE_OPERATION",
      "position": {
        "x": 504,
        "y": 479
      },
      "inputs": [
        {
          "name": "array",
          "data": 22,
          "shape": [],
          "type": "INTEGER",
          "primitive_name": "array",
          "flow_state": "BOOT_SOURCE"
        }
      ],
      "outputs": [
        {
          "name": "result",
          "primitive_name": "result",
          "flow_state": "UNBOUND"
        }
      ]
    },
    {
      "name": "Op_30b9c98a",
      "primitive_name": "conditional_filter",
      "type": "PRIMITIVE_OPERATION",
      "position": {
        "x": 878,
        "y": 659
      },
      "inputs": [
        {
          "name": "condition",
          "primitive_name": "condition"
        },
        {
          "name": "data_if_true",
          "data": 48,
          "shape": [],
          "type": "INTEGER",
          "primitive_name": "data_if_true",
          "flow_state": "BOOT_SOURCE"
        },
        {
          "name": "data_if_false",
          "primitive_name": "data_if_false"
        }
      ],
      "outputs": [
        {
          "name": "output_data",
          "primitive_name": "output_data",
          "flow_state": "UNBOUND"
        }
      ]
    },
    {
      "name": "Op_375d911c",
      "primitive_name": "logical_not",
      "type": "PRIMITIVE_OPERATION",
      "position": {
        "x": 1369,
        "y": 614
      },
      "inputs": [
        {
          "name": "condition",
          "primitive_name": "condition"
        }
      ],
      "outputs": [
        {
          "name": "new_condition",
          "primitive_name": "new_condition",
          "flow_state": "UNBOUND"
        }
      ]
    }
  ],
  "links": [
    {
      "source": {
        "operation": "this",
        "data": "input_0"
      },
      "sink": {
        "operation": "Op_7d182440",
        "data": "left_operand"
      },
      "control_points": []
    },
    {
      "source": {
        "operation": "Op_c4c91a8b",
        "data": "result"
      },
      "sink": {
        "operation": "Op_30b9c98a",
        "data": "data_if_false"
      },
      "control_points": [
        {
          "x": 640,
          "y": 775
        },
        {
          "x": 640,
          "y": 980
        },
        {
          "x": 1922,
          "y": 980
        },
        {
          "x": 1291,
          "y": 657
        }
      ]
    },
    {
      "source": {
        "operation": "Op_375d911c",
        "data": "new_condition"
      },
      "sink": {
        "operation": "this",
        "data": "output_0"
      },
      "control_points": []
    },
    {
      "source": {
        "operation": "Op_7d182440",
        "data": "result"
      },
      "sink": {
        "operation": "this",
        "data": "output_1"
      },
      "control_points": []
    }
  ],
  "global_constants": []
}

export type Composite = typeof composite;
export type Operation = Composite["operations"][number];
export type Link = Composite["links"][number];
