export type StateId = string;
export type BranchId = string;

/**
 * This interface represents the state shape of the DAG history in the Redux
 * state tree.
 */
export interface IDagHistory {
    /**
     * The current application state
     */
    current: any;

    /**
     * The explored state space, represented as a graph (future and past)
     */
    graph: any; // {
        /*
        current: {

            state: StateId,

            /**
             * The current branch being used
            branch: BranchId,
        },

        /**
         * Branches are Pointers to State Tracks
        branches: {
            [id: string]: { // BranchId
                latest: StateId;
                committed: StateId;
            };
        };

        /**
         * A hash of states by ID
        states: {
            [id: string]: { // StateId
                /**
                 * The application state for this state node
                state: any;

                /**
                 * The child states of this state
                children: StateId[];

                /**
                 * The parent state ID. If this is null, then this state has no parent.
                parent?: StateId;
            };
        };
    };*/
};

export interface StateIdGenerator {
    (): StateId;
}