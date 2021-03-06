import {questionNames} from '../prompts/question-names';
import {promptForDependencyUpdaterChoice} from './prompt';

export default async function (scaffolders, decisions, options) {
  if (!Object.keys(scaffolders).length) return undefined;

  const scaffolderDetails = scaffolders[
    (await promptForDependencyUpdaterChoice(scaffolders, decisions))[questionNames.DEPENDENCY_UPDATER]
  ];

  if (scaffolderDetails) return scaffolderDetails.scaffolder(options);

  return undefined;
}
