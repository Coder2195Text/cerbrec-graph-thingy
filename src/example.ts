import { Composite } from "./types";

export const example: Composite = {
    "name": "Composite_8311840b",
    "type": "COMPOSITE_OPERATION",
    "inputs": [
        {
            "name": "input_0",
            "primitive_name": "input_0"
        },
        {
            "name": "input_1",
            "primitive_name": "input_1"
        },
        {
            "name": "input_2",
            "primitive_name": "input_2"
        },
        {
            "name": "input_3",
            "primitive_name": "input_3"
        }
    ],
    "outputs": [
        {
            "name": "output_0",
            "primitive_name": "output_0"
        },
        {
            "name": "output_1",
            "primitive_name": "output_1"
        }
    ],
    "operations": [
        {
            "name": "Op_618bd732",
            "primitive_name": "argument_minimum",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "array",
                    "primitive_name": "array",
                    "type": "BOOLEAN",
                    "shape": [],
                    "data": true,
                    "flow_state": "BOOT_SOURCE"
                },
                {
                    "name": "dimension_index",
                    "primitive_name": "dimension_index",
                    "type": "TEXT",
                    "shape": [],
                    "data": "hello",
                    "flow_state": "BOOT_SOURCE"
                },
                {
                    "name": "keep_dimension",
                    "primitive_name": "keep_dimension",
                    "type": "DECIMAL",
                    "shape": [],
                    "data": 71.56,
                    "flow_state": "BOOT_SOURCE"
                }
            ],
            "outputs": [
                {
                    "name": "argument",
                    "primitive_name": "argument"
                }
            ]
        },
        {
            "name": "Op_fe7dd017",
            "primitive_name": "count_occurrences",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "target",
                    "primitive_name": "target"
                },
                {
                    "name": "count_against",
                    "primitive_name": "count_against",
                    "type": "INTEGER",
                    "shape": [],
                    "data": 9,
                    "flow_state": "BOOT_SOURCE"
                }
            ],
            "outputs": [
                {
                    "name": "occurrences",
                    "primitive_name": "occurrences"
                }
            ]
        },
        {
            "name": "Op_724d7ff8",
            "primitive_name": "mean",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "array",
                    "primitive_name": "array"
                },
                {
                    "name": "dimension_index",
                    "primitive_name": "dimension_index"
                },
                {
                    "name": "keep_dimension",
                    "primitive_name": "keep_dimension",
                    "type": "TEXT",
                    "shape": [],
                    "data": "sample_text",
                    "flow_state": "BOOT_SOURCE"
                }
            ],
            "outputs": [
                {
                    "name": "mean_result",
                    "primitive_name": "mean_result"
                }
            ]
        },
        {
            "name": "Op_16d7b924",
            "primitive_name": "generate_combinations_batch",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "array",
                    "primitive_name": "array"
                },
                {
                    "name": "number_of_samples",
                    "primitive_name": "number_of_samples"
                },
                {
                    "name": "batch_size",
                    "primitive_name": "batch_size"
                },
                {
                    "name": "start_index",
                    "primitive_name": "start_index"
                }
            ],
            "outputs": [
                {
                    "name": "samples",
                    "primitive_name": "samples"
                }
            ]
        },
        {
            "name": "Op_bfcf1ed8",
            "primitive_name": "swap_elements",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "array",
                    "primitive_name": "array",
                    "type": "TEXT",
                    "shape": [],
                    "data": "hello",
                    "flow_state": "BOOT_SOURCE"
                },
                {
                    "name": "dimension_index",
                    "primitive_name": "dimension_index"
                },
                {
                    "name": "index_1",
                    "primitive_name": "index_1",
                    "type": "TEXT",
                    "shape": [],
                    "data": "random_text",
                    "flow_state": "BOOT_SOURCE"
                },
                {
                    "name": "index_2",
                    "primitive_name": "index_2"
                }
            ],
            "outputs": [
                {
                    "name": "swapped_array",
                    "primitive_name": "swapped_array"
                }
            ]
        },
        {
            "name": "Op_8194e8d0",
            "primitive_name": "get_sub_arrays",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "input",
                    "primitive_name": "input"
                },
                {
                    "name": "dimension_index",
                    "primitive_name": "dimension_index"
                },
                {
                    "name": "selected_indices",
                    "primitive_name": "selected_indices"
                }
            ],
            "outputs": [
                {
                    "name": "output",
                    "primitive_name": "output"
                }
            ]
        },
        {
            "name": "Op_7b9a524c",
            "primitive_name": "filter",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "array",
                    "primitive_name": "array"
                },
                {
                    "name": "dimension_index",
                    "primitive_name": "dimension_index"
                },
                {
                    "name": "condition",
                    "primitive_name": "condition",
                    "type": "INTEGER",
                    "shape": [],
                    "data": 69,
                    "flow_state": "BOOT_SOURCE"
                }
            ],
            "outputs": [
                {
                    "name": "filtered_array",
                    "primitive_name": "filtered_array"
                }
            ]
        },
        {
            "name": "Op_c3ed2407",
            "primitive_name": "sample_by_step",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "array",
                    "primitive_name": "array"
                },
                {
                    "name": "dimension_index",
                    "primitive_name": "dimension_index",
                    "type": "DECIMAL",
                    "shape": [],
                    "data": 62.22,
                    "flow_state": "BOOT_SOURCE"
                },
                {
                    "name": "step_value",
                    "primitive_name": "step_value",
                    "type": "BOOLEAN",
                    "shape": [],
                    "data": true,
                    "flow_state": "BOOT_SOURCE"
                }
            ],
            "outputs": [
                {
                    "name": "sampled_array",
                    "primitive_name": "sampled_array"
                }
            ]
        },
        {
            "name": "Op_039b6fb2",
            "primitive_name": "element_wise_multiply",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "left_array",
                    "primitive_name": "left_array"
                },
                {
                    "name": "right_array",
                    "primitive_name": "right_array"
                }
            ],
            "outputs": [
                {
                    "name": "multiplied_array",
                    "primitive_name": "multiplied_array"
                }
            ]
        },
        {
            "name": "Op_a616a600",
            "primitive_name": "scatter_add",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "input",
                    "primitive_name": "input"
                },
                {
                    "name": "index_array",
                    "primitive_name": "index_array",
                    "type": "TEXT",
                    "shape": [],
                    "data": "test_string",
                    "flow_state": "BOOT_SOURCE"
                },
                {
                    "name": "source_array",
                    "primitive_name": "source_array",
                    "type": "DECIMAL",
                    "shape": [],
                    "data": -7.36,
                    "flow_state": "BOOT_SOURCE"
                },
                {
                    "name": "dimension_index",
                    "primitive_name": "dimension_index"
                }
            ],
            "outputs": [
                {
                    "name": "scatter_array",
                    "primitive_name": "scatter_array"
                }
            ]
        },
        {
            "name": "Op_9e9ac71a",
            "primitive_name": "identity",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "input",
                    "primitive_name": "input"
                }
            ],
            "outputs": [
                {
                    "name": "output",
                    "primitive_name": "output"
                }
            ]
        },
        {
            "name": "Op_3a392c0b",
            "primitive_name": "scatter_add",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "input",
                    "primitive_name": "input",
                    "type": "BOOLEAN",
                    "shape": [],
                    "data": false,
                    "flow_state": "BOOT_SOURCE"
                },
                {
                    "name": "index_array",
                    "primitive_name": "index_array"
                },
                {
                    "name": "source_array",
                    "primitive_name": "source_array"
                },
                {
                    "name": "dimension_index",
                    "primitive_name": "dimension_index"
                }
            ],
            "outputs": [
                {
                    "name": "scatter_array",
                    "primitive_name": "scatter_array"
                }
            ]
        },
        {
            "name": "Op_e4b5cd2f",
            "primitive_name": "multiply",
            "type": "PRIMITIVE_OPERATION",
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
                    "name": "multiplied_result",
                    "primitive_name": "multiplied_result"
                }
            ]
        },
        {
            "name": "Op_7964436c",
            "primitive_name": "sample_by_step",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "array",
                    "primitive_name": "array",
                    "type": "TEXT",
                    "shape": [],
                    "data": "sample_text",
                    "flow_state": "BOOT_SOURCE"
                },
                {
                    "name": "dimension_index",
                    "primitive_name": "dimension_index"
                },
                {
                    "name": "step_value",
                    "primitive_name": "step_value",
                    "type": "BOOLEAN",
                    "shape": [],
                    "data": true,
                    "flow_state": "BOOT_SOURCE"
                }
            ],
            "outputs": [
                {
                    "name": "sampled_array",
                    "primitive_name": "sampled_array"
                }
            ]
        },
        {
            "name": "Op_2cbdd554",
            "primitive_name": "scatter_add",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "input",
                    "primitive_name": "input",
                    "type": "DECIMAL",
                    "shape": [],
                    "data": 9.87,
                    "flow_state": "BOOT_SOURCE"
                },
                {
                    "name": "index_array",
                    "primitive_name": "index_array"
                },
                {
                    "name": "source_array",
                    "primitive_name": "source_array"
                },
                {
                    "name": "dimension_index",
                    "primitive_name": "dimension_index"
                }
            ],
            "outputs": [
                {
                    "name": "scatter_array",
                    "primitive_name": "scatter_array"
                }
            ]
        },
        {
            "name": "Op_8315812f",
            "primitive_name": "shuffle",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "input",
                    "primitive_name": "input"
                },
                {
                    "name": "dimension_index",
                    "primitive_name": "dimension_index"
                }
            ],
            "outputs": [
                {
                    "name": "shuffled_array",
                    "primitive_name": "shuffled_array"
                }
            ]
        },
        {
            "name": "Op_008b08f1",
            "primitive_name": "conv2d_transpose",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "input",
                    "primitive_name": "input"
                },
                {
                    "name": "kernel",
                    "primitive_name": "kernel"
                },
                {
                    "name": "stride",
                    "primitive_name": "stride"
                }
            ],
            "outputs": [
                {
                    "name": "output",
                    "primitive_name": "output"
                }
            ]
        },
        {
            "name": "Op_22533679",
            "primitive_name": "sum",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "array",
                    "primitive_name": "array"
                },
                {
                    "name": "dimension_index",
                    "primitive_name": "dimension_index",
                    "type": "DECIMAL",
                    "shape": [],
                    "data": 35.71,
                    "flow_state": "BOOT_SOURCE"
                },
                {
                    "name": "keep_dimension",
                    "primitive_name": "keep_dimension"
                }
            ],
            "outputs": [
                {
                    "name": "sum_result",
                    "primitive_name": "sum_result"
                }
            ]
        },
        {
            "name": "Op_ee2ee4ab",
            "primitive_name": "sum",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "array",
                    "primitive_name": "array"
                },
                {
                    "name": "dimension_index",
                    "primitive_name": "dimension_index"
                },
                {
                    "name": "keep_dimension",
                    "primitive_name": "keep_dimension"
                }
            ],
            "outputs": [
                {
                    "name": "sum_result",
                    "primitive_name": "sum_result"
                }
            ]
        },
        {
            "name": "Op_7f2568c8",
            "primitive_name": "diagonal",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "input",
                    "primitive_name": "input"
                },
                {
                    "name": "value",
                    "primitive_name": "value"
                }
            ],
            "outputs": [
                {
                    "name": "diagonal_array",
                    "primitive_name": "diagonal_array"
                }
            ]
        },
        {
            "name": "Op_9bca2dfb",
            "primitive_name": "product",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "array",
                    "primitive_name": "array"
                },
                {
                    "name": "dimension_index",
                    "primitive_name": "dimension_index",
                    "type": "INTEGER",
                    "shape": [],
                    "data": 92,
                    "flow_state": "BOOT_SOURCE"
                },
                {
                    "name": "keep_dimension",
                    "primitive_name": "keep_dimension"
                }
            ],
            "outputs": [
                {
                    "name": "prod_result",
                    "primitive_name": "prod_result"
                }
            ]
        },
        {
            "name": "Op_c880782f",
            "primitive_name": "generate_uniform_random_number",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "shape",
                    "primitive_name": "shape"
                },
                {
                    "name": "random_seed",
                    "primitive_name": "random_seed",
                    "type": "INTEGER",
                    "shape": [],
                    "data": 83,
                    "flow_state": "BOOT_SOURCE"
                },
                {
                    "name": "left_limit",
                    "primitive_name": "left_limit"
                },
                {
                    "name": "right_limit",
                    "primitive_name": "right_limit"
                }
            ],
            "outputs": [
                {
                    "name": "random_number",
                    "primitive_name": "random_number"
                }
            ]
        },
        {
            "name": "Op_942c3af0",
            "primitive_name": "lower_upper_case_text",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "text",
                    "primitive_name": "text"
                },
                {
                    "name": "is_lower_case",
                    "primitive_name": "is_lower_case"
                }
            ],
            "outputs": [
                {
                    "name": "processed_text",
                    "primitive_name": "processed_text"
                }
            ]
        },
        {
            "name": "Op_d85ded7b",
            "primitive_name": "insert_text",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "text",
                    "primitive_name": "text",
                    "type": "INTEGER",
                    "shape": [],
                    "data": 62,
                    "flow_state": "BOOT_SOURCE"
                },
                {
                    "name": "search_regex",
                    "primitive_name": "search_regex"
                },
                {
                    "name": "inserted_text",
                    "primitive_name": "inserted_text"
                }
            ],
            "outputs": [
                {
                    "name": "processed_text",
                    "primitive_name": "processed_text"
                }
            ]
        },
        {
            "name": "Op_87027858",
            "primitive_name": "filter",
            "type": "PRIMITIVE_OPERATION",
            "inputs": [
                {
                    "name": "array",
                    "primitive_name": "array"
                },
                {
                    "name": "dimension_index",
                    "primitive_name": "dimension_index"
                },
                {
                    "name": "condition",
                    "primitive_name": "condition"
                }
            ],
            "outputs": [
                {
                    "name": "filtered_array",
                    "primitive_name": "filtered_array"
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
                "operation": "Op_fe7dd017",
                "data": "target"
            }
        },
        {
            "source": {
                "operation": "Op_618bd732",
                "data": "argument"
            },
            "sink": {
                "operation": "Op_724d7ff8",
                "data": "array"
            }
        },
        {
            "source": {
                "operation": "this",
                "data": "input_1"
            },
            "sink": {
                "operation": "Op_724d7ff8",
                "data": "dimension_index"
            }
        },
        {
            "source": {
                "operation": "this",
                "data": "input_3"
            },
            "sink": {
                "operation": "Op_16d7b924",
                "data": "array"
            }
        },
        {
            "source": {
                "operation": "Op_618bd732",
                "data": "argument"
            },
            "sink": {
                "operation": "Op_16d7b924",
                "data": "number_of_samples"
            }
        },
        {
            "source": {
                "operation": "Op_724d7ff8",
                "data": "mean_result"
            },
            "sink": {
                "operation": "Op_16d7b924",
                "data": "batch_size"
            }
        },
        {
            "source": {
                "operation": "Op_fe7dd017",
                "data": "occurrences"
            },
            "sink": {
                "operation": "Op_16d7b924",
                "data": "start_index"
            }
        },
        {
            "source": {
                "operation": "Op_fe7dd017",
                "data": "occurrences"
            },
            "sink": {
                "operation": "Op_bfcf1ed8",
                "data": "dimension_index"
            }
        },
        {
            "source": {
                "operation": "Op_16d7b924",
                "data": "samples"
            },
            "sink": {
                "operation": "Op_bfcf1ed8",
                "data": "index_2"
            }
        },
        {
            "source": {
                "operation": "Op_16d7b924",
                "data": "samples"
            },
            "sink": {
                "operation": "Op_8194e8d0",
                "data": "input"
            }
        },
        {
            "source": {
                "operation": "this",
                "data": "input_2"
            },
            "sink": {
                "operation": "Op_8194e8d0",
                "data": "dimension_index"
            }
        },
        {
            "source": {
                "operation": "Op_bfcf1ed8",
                "data": "swapped_array"
            },
            "sink": {
                "operation": "Op_8194e8d0",
                "data": "selected_indices"
            }
        },
        {
            "source": {
                "operation": "Op_fe7dd017",
                "data": "occurrences"
            },
            "sink": {
                "operation": "Op_7b9a524c",
                "data": "array"
            }
        },
        {
            "source": {
                "operation": "this",
                "data": "input_3"
            },
            "sink": {
                "operation": "Op_7b9a524c",
                "data": "dimension_index"
            }
        },
        {
            "source": {
                "operation": "Op_bfcf1ed8",
                "data": "swapped_array"
            },
            "sink": {
                "operation": "Op_c3ed2407",
                "data": "array"
            }
        },
        {
            "source": {
                "operation": "Op_724d7ff8",
                "data": "mean_result"
            },
            "sink": {
                "operation": "Op_039b6fb2",
                "data": "left_array"
            }
        },
        {
            "source": {
                "operation": "Op_c3ed2407",
                "data": "sampled_array"
            },
            "sink": {
                "operation": "Op_039b6fb2",
                "data": "right_array"
            }
        },
        {
            "source": {
                "operation": "Op_fe7dd017",
                "data": "occurrences"
            },
            "sink": {
                "operation": "Op_a616a600",
                "data": "input"
            }
        },
        {
            "source": {
                "operation": "Op_fe7dd017",
                "data": "occurrences"
            },
            "sink": {
                "operation": "Op_a616a600",
                "data": "dimension_index"
            }
        },
        {
            "source": {
                "operation": "Op_a616a600",
                "data": "scatter_array"
            },
            "sink": {
                "operation": "Op_9e9ac71a",
                "data": "input"
            }
        },
        {
            "source": {
                "operation": "Op_fe7dd017",
                "data": "occurrences"
            },
            "sink": {
                "operation": "Op_3a392c0b",
                "data": "index_array"
            }
        },
        {
            "source": {
                "operation": "Op_c3ed2407",
                "data": "sampled_array"
            },
            "sink": {
                "operation": "Op_3a392c0b",
                "data": "source_array"
            }
        },
        {
            "source": {
                "operation": "Op_7b9a524c",
                "data": "filtered_array"
            },
            "sink": {
                "operation": "Op_3a392c0b",
                "data": "dimension_index"
            }
        },
        {
            "source": {
                "operation": "Op_3a392c0b",
                "data": "scatter_array"
            },
            "sink": {
                "operation": "Op_e4b5cd2f",
                "data": "left_operand"
            }
        },
        {
            "source": {
                "operation": "Op_724d7ff8",
                "data": "mean_result"
            },
            "sink": {
                "operation": "Op_e4b5cd2f",
                "data": "right_operand"
            }
        },
        {
            "source": {
                "operation": "Op_8194e8d0",
                "data": "output"
            },
            "sink": {
                "operation": "Op_7964436c",
                "data": "dimension_index"
            }
        },
        {
            "source": {
                "operation": "Op_8194e8d0",
                "data": "output"
            },
            "sink": {
                "operation": "Op_2cbdd554",
                "data": "index_array"
            }
        },
        {
            "source": {
                "operation": "Op_16d7b924",
                "data": "samples"
            },
            "sink": {
                "operation": "Op_2cbdd554",
                "data": "source_array"
            }
        },
        {
            "source": {
                "operation": "Op_3a392c0b",
                "data": "scatter_array"
            },
            "sink": {
                "operation": "Op_2cbdd554",
                "data": "dimension_index"
            }
        },
        {
            "source": {
                "operation": "Op_618bd732",
                "data": "argument"
            },
            "sink": {
                "operation": "Op_8315812f",
                "data": "input"
            }
        },
        {
            "source": {
                "operation": "Op_bfcf1ed8",
                "data": "swapped_array"
            },
            "sink": {
                "operation": "Op_8315812f",
                "data": "dimension_index"
            }
        },
        {
            "source": {
                "operation": "Op_8194e8d0",
                "data": "output"
            },
            "sink": {
                "operation": "Op_008b08f1",
                "data": "input"
            }
        },
        {
            "source": {
                "operation": "Op_9e9ac71a",
                "data": "output"
            },
            "sink": {
                "operation": "Op_008b08f1",
                "data": "kernel"
            }
        },
        {
            "source": {
                "operation": "Op_618bd732",
                "data": "argument"
            },
            "sink": {
                "operation": "Op_008b08f1",
                "data": "stride"
            }
        },
        {
            "source": {
                "operation": "Op_008b08f1",
                "data": "output"
            },
            "sink": {
                "operation": "Op_22533679",
                "data": "array"
            }
        },
        {
            "source": {
                "operation": "Op_e4b5cd2f",
                "data": "multiplied_result"
            },
            "sink": {
                "operation": "Op_22533679",
                "data": "keep_dimension"
            }
        },
        {
            "source": {
                "operation": "Op_7964436c",
                "data": "sampled_array"
            },
            "sink": {
                "operation": "Op_ee2ee4ab",
                "data": "array"
            }
        },
        {
            "source": {
                "operation": "Op_fe7dd017",
                "data": "occurrences"
            },
            "sink": {
                "operation": "Op_ee2ee4ab",
                "data": "dimension_index"
            }
        },
        {
            "source": {
                "operation": "Op_a616a600",
                "data": "scatter_array"
            },
            "sink": {
                "operation": "Op_ee2ee4ab",
                "data": "keep_dimension"
            }
        },
        {
            "source": {
                "operation": "Op_fe7dd017",
                "data": "occurrences"
            },
            "sink": {
                "operation": "Op_7f2568c8",
                "data": "input"
            }
        },
        {
            "source": {
                "operation": "Op_22533679",
                "data": "sum_result"
            },
            "sink": {
                "operation": "Op_7f2568c8",
                "data": "value"
            }
        },
        {
            "source": {
                "operation": "Op_e4b5cd2f",
                "data": "multiplied_result"
            },
            "sink": {
                "operation": "Op_9bca2dfb",
                "data": "array"
            }
        },
        {
            "source": {
                "operation": "Op_ee2ee4ab",
                "data": "sum_result"
            },
            "sink": {
                "operation": "Op_9bca2dfb",
                "data": "keep_dimension"
            }
        },
        {
            "source": {
                "operation": "Op_a616a600",
                "data": "scatter_array"
            },
            "sink": {
                "operation": "Op_c880782f",
                "data": "shape"
            }
        },
        {
            "source": {
                "operation": "Op_8194e8d0",
                "data": "output"
            },
            "sink": {
                "operation": "Op_c880782f",
                "data": "left_limit"
            }
        },
        {
            "source": {
                "operation": "Op_039b6fb2",
                "data": "multiplied_array"
            },
            "sink": {
                "operation": "Op_c880782f",
                "data": "right_limit"
            }
        },
        {
            "source": {
                "operation": "Op_c3ed2407",
                "data": "sampled_array"
            },
            "sink": {
                "operation": "Op_942c3af0",
                "data": "text"
            }
        },
        {
            "source": {
                "operation": "Op_ee2ee4ab",
                "data": "sum_result"
            },
            "sink": {
                "operation": "Op_942c3af0",
                "data": "is_lower_case"
            }
        },
        {
            "source": {
                "operation": "Op_8315812f",
                "data": "shuffled_array"
            },
            "sink": {
                "operation": "Op_d85ded7b",
                "data": "search_regex"
            }
        },
        {
            "source": {
                "operation": "Op_7b9a524c",
                "data": "filtered_array"
            },
            "sink": {
                "operation": "Op_d85ded7b",
                "data": "inserted_text"
            }
        },
        {
            "source": {
                "operation": "Op_22533679",
                "data": "sum_result"
            },
            "sink": {
                "operation": "Op_87027858",
                "data": "array"
            }
        },
        {
            "source": {
                "operation": "Op_16d7b924",
                "data": "samples"
            },
            "sink": {
                "operation": "Op_87027858",
                "data": "dimension_index"
            }
        },
        {
            "source": {
                "operation": "Op_9bca2dfb",
                "data": "prod_result"
            },
            "sink": {
                "operation": "Op_87027858",
                "data": "condition"
            }
        },
        {
            "source": {
                "operation": "Op_e4b5cd2f",
                "data": "multiplied_result"
            },
            "sink": {
                "operation": "this",
                "data": "output_0"
            }
        },
        {
            "source": {
                "operation": "Op_724d7ff8",
                "data": "mean_result"
            },
            "sink": {
                "operation": "this",
                "data": "output_1"
            }
        }
    ]
}
