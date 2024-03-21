import planPlan from './files/plan/plan.pdf'
import planPresentation from './files/plan/plan_presentation.pdf'
import milestoneOneRequirements from './files/milestone_1/requirements.pdf'
import milestoneOneDesign from './files/milestone_1/design.pdf'
import milestoneOneTest from './files/milestone_1/test_plan.pdf'
import milestoneOnePresentation from './files/milestone_1/presentation.pdf'
import milestoneOneEvaluation from './files/milestone_1/progress_evaluation.pdf'
import milestoneTwoPresentation from './files/milestone_2/presentation.pdf'
import milestoneTwoEvaluation from './files/milestone_2/progress_evaluation.pdf'
//import milestoneThreePresentation from './files/milestone_3/presentation.pdf'
//import milestoneThreeEvaluation from './files/milestone_3/progress_evaluation.pdf'

export const planFiles = [{name: "Plan", href: planPlan},
                   {name: "Presentation", href: planPresentation}]

export const milestoneOneFiles = [{name: "Requirements", href: milestoneOneRequirements},
                           {name: "Design", href: milestoneOneDesign},
                           {name: "Test", href: milestoneOneTest},
                           {name: "Presentation", href: milestoneOnePresentation},
                           {name: "Progress Evaluation", href: milestoneOneEvaluation}]

export const milestoneTwoFiles = [{name: "Presentation", href: milestoneTwoPresentation},
                           {name: "Progress Evaluation", href: milestoneTwoEvaluation}]

export const milestoneThreeFiles = [{name: "Presentation", href: '/project-materials'},
                             {name: "Progress Evaluation", href: '/project-materials'}]

export const projectFiles = planFiles.concat(milestoneOneFiles, milestoneTwoFiles, milestoneThreeFiles)

export const fileLinks = [{cardName: "Plan", dueDate: "Jaunary 22nd", links: planFiles},
                   {cardName: "Milestone 1", dueDate: "February 19th", links: milestoneOneFiles},
                   {cardName: "Milestone 2", dueDate: "March 18th", links: milestoneTwoFiles},
                   {cardName: "Milestone 3", dueDate: "April 15th", links: milestoneThreeFiles}]
