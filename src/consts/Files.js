import planPlan from '../files/plan/plan.pdf'
import planPresentation from '../files/plan/plan_presentation.pdf'
import milestoneOneRequirements from '../files/milestone_1/requirements.pdf'
import milestoneOneDesign from '../files/milestone_1/design.pdf'
import milestoneOneTest from '../files/milestone_1/test_plan.pdf'
import milestoneOnePresentation from '../files/milestone_1/presentation.pdf'
import milestoneOneEvaluation from '../files/milestone_1/progress_evaluation.pdf'
import milestoneTwoPresentation from '../files/milestone_2/presentation.pdf'
import milestoneTwoEvaluation from '../files/milestone_2/progress_evaluation.pdf'
import milestoneThreePresentation from '../files/milestone_3/presentation.pdf'
import milestoneThreeEvaluation from '../files/milestone_3/progress_evaluation.pdf'


import planTwoPlan from '../files/semester_two/plan/plan.pdf'
import planTwoPresentation from '../files/semester_two/plan/plan_presentation.pdf'
import milestoneFourPresentation from '../files/semester_two/milestone_4/presentation.pdf'
import milestoneFourEvaluation from '../files/semester_two/milestone_4/progress_evaluation.pdf'
import milestoneFivePresentation from '../files/semester_two/milestone_5/presentation.pdf'
import milestoneFiveEvaluation from '../files/semester_two/milestone_5/progress_evaluation.pdf'
import milestoneFivePoster from '../files/semester_two/milestone_5/poster.pdf'


export const planFiles = [{name: "Plan", href: planPlan},
                   {name: "Presentation", href: planPresentation}]

export const milestoneOneFiles = [{name: "Requirements", href: milestoneOneRequirements},
                           {name: "Design", href: milestoneOneDesign},
                           {name: "Test", href: milestoneOneTest},
                           {name: "Presentation", href: milestoneOnePresentation},
                           {name: "Progress Evaluation", href: milestoneOneEvaluation}]

export const milestoneTwoFiles = [{name: "Presentation", href: milestoneTwoPresentation},
                           {name: "Progress Evaluation", href: milestoneTwoEvaluation}]

export const milestoneThreeFiles = [{name: "Presentation", href: milestoneThreePresentation},
                             {name: "Progress Evaluation", href: milestoneThreeEvaluation}]

export const milestoneFourFiles = [{name : 'Presentation', href: milestoneFourPresentation},
                             {name: 'Progress Evaluation', href: milestoneFourEvaluation}]

export const milestoneFiveFiles = [{name : 'Presentation', href: milestoneFivePresentation},
                                   {name : 'Progress Evaluation', href : milestoneFiveEvaluation},
                                   {name : 'Poster', href : milestoneFivePoster}]

export const projectFiles = planFiles.concat(milestoneOneFiles, milestoneTwoFiles, milestoneThreeFiles)

export const semesterTwoPlanFiles = [{name: "Plan", href: planTwoPlan},
                        {name: "Presentation", href: planTwoPresentation}]

export const firstSemesterFileLinks = [{cardName: "Plan", dueDate: "Jaunary 22nd", links: planFiles},
                   {cardName: "Milestone 1", dueDate: "February 19th", links: milestoneOneFiles},
                   {cardName: "Milestone 2", dueDate: "March 18th", links: milestoneTwoFiles},
                   {cardName: "Milestone 3", dueDate: "April 15th", links: milestoneThreeFiles}]

export const secondSemesterFileLinks = [{cardName: "Plan", dueDate: "September 4th", links: semesterTwoPlanFiles},
                    {cardName: "Milestone 4", dueDate: "September 30th", links: milestoneFourFiles},
                    {cardName: " Milestone 5", dueDate : "October 28th", links : milestoneFiveFiles}
                ]
