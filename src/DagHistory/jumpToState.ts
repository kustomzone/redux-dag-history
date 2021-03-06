import * as Immutable from 'immutable';
import {
  IDagHistory,
  StateNameGenerator,
  StateId,
} from '../interfaces';
import DagGraph from '../DagGraph';
import { jump } from './jump';

const log = require('debug')('redux-dag-history:DagHistory');

export default function jumpToState<T>(stateId: StateId, history: IDagHistory<T>): IDagHistory<T> {
  log('jumping to state %s', stateId);
  const { graph } = history;
  const reader = new DagGraph(graph);
  const branches = reader.branchesOf(stateId);
  const branch = reader.currentBranch;

  const updateObj: any = {
    pinnedStateId: null,
  };

  return jump(stateId, history, updateObj, (writer) => {
    if (branches.indexOf(branch) === -1) {
      const stateBranch = reader.branchOf(stateId);
      log('current branch %s is not present on commit %s, available are [%s] - setting current branch to %s', branch, stateId, branches.join(', '), stateBranch);
      writer.setCurrentBranch(stateBranch);
    } else {
      writer.setCommitted(branch, stateId);
    }
  });
}
