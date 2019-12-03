import { createSelector } from 'reselect';
import { CaseHistoryManageProps } from './CaseHistoryManage';
import { CaseHistoryAbuseType } from '../CaseHistoryAbuseType';
import { CaseHistoryAccompaniedByType } from '../CaseHistoryAccompaniedByType';
import { CaseHistoryArrivalReasonType } from '../CaseHistoryArrivalReasonType';
import { CaseHistoryDivorceOutcomeType } from '../CaseHistoryDivorceOutcomeType';
import { CaseHistoryDivorcedParentsType } from '../CaseHistoryDivorcedParentsType';
import { CaseHistoryIndividualType } from '../CaseHistoryIndividualType';
import { CaseHistoryLivesWithType } from '../CaseHistoryLivesWithType';
import { CaseHistoryParentsInJailType } from '../CaseHistoryParentsInJailType';
import { CaseHistoryReasonOfMultipleAdoptionsType } from '../CaseHistoryReasonOfMultipleAdoptionsType';
import { CaseHistoryReferralType } from '../CaseHistoryReferralType';
import { CaseHistoryReportedAbuseType } from '../CaseHistoryReportedAbuseType';
import { ProfessionalType } from 'modules/Professional/ProfessionalType';

const getCaseStudyRowId = ({ caseStudyRowId }: CaseHistoryManageProps) => caseStudyRowId;
const getCaseHistory = ({ caseHistory }: CaseHistoryManageProps) => caseHistory;

export interface FormValues {
  caseStudyRowId: string;
  caseHistoryRowId: string | null; // when null, its getting created
  // arrival
  accompaniedBy: CaseHistoryAccompaniedByType | null;
  arrivalReason: CaseHistoryArrivalReasonType[] | null;
  // earlier treatments
  previousTreatment: string | null;
  earlierProfessionalHelp: ProfessionalType[] | null;
  referral: CaseHistoryReferralType[] | null;
  referralDiagnosis: string | null;
  involvedReferral: boolean | null;
  // parents
  divorcedParents: CaseHistoryDivorcedParentsType | null;
  divorceOutcome: CaseHistoryDivorceOutcomeType | null;
  parentsInJail: CaseHistoryParentsInJailType | null;
  // lives with
  livesWith: CaseHistoryLivesWithType[] | null;
  // death
  lossOfCloseIndividual: CaseHistoryIndividualType[] | null;
  ageDuringLossOfCloseIndividual: number | null;
  // adoption
  adoptionAge: number | null;
  numberOfAdoptions: number | null;
  reasonOfMultipleAdoptions: CaseHistoryReasonOfMultipleAdoptionsType[] | null;
  // education
  schoolMark: number | null;
  attendsKindergarten: boolean | null;
  diagnosedIntelectualDevelopmentProblems: boolean | null;
  adaptedEducationProgram: boolean | null;
  individualizedEducationProgram: boolean | null;
  // abuses
  furtherAbuses: CaseHistoryAbuseType[] | null;
  reportedFurtherAbuses: CaseHistoryReportedAbuseType | null;
  // other
  familyHeredity: string | null;
  ptsp: string | null;
}

export const deriveFormValues = createSelector(
  getCaseStudyRowId,
  getCaseHistory,
  (caseStudyRowId, caseHistory): FormValues => ({
    caseStudyRowId: caseStudyRowId,
    caseHistoryRowId: caseHistory ? caseHistory.rowId : null,
    // arival
    accompaniedBy: caseHistory
      ? (caseHistory.accompaniedBy as CaseHistoryAccompaniedByType)
      : CaseHistoryAccompaniedByType.NoOne,
    arrivalReason: caseHistory
      ? (caseHistory.arrivalReason as CaseHistoryArrivalReasonType[])
      : null,
    // earlier treatments
    previousTreatment: caseHistory ? caseHistory.previousTreatment : null,
    earlierProfessionalHelp: caseHistory
      ? (caseHistory.earlierProfessionalHelp as ProfessionalType[])
      : null,
    referral: caseHistory ? (caseHistory.referral as CaseHistoryReferralType[]) : null,
    referralDiagnosis: caseHistory ? caseHistory.referralDiagnosis : null,
    involvedReferral: caseHistory ? caseHistory.involvedReferral : null,
    // parents
    divorcedParents: caseHistory
      ? (caseHistory.divorcedParents as CaseHistoryDivorcedParentsType)
      : null,
    divorceOutcome: caseHistory
      ? (caseHistory.divorceOutcome as CaseHistoryDivorceOutcomeType)
      : null,
    parentsInJail: caseHistory ? (caseHistory.parentsInJail as CaseHistoryParentsInJailType) : null,
    // lives with
    livesWith: caseHistory ? (caseHistory.livesWith as CaseHistoryLivesWithType[]) : null,
    // death
    lossOfCloseIndividual: caseHistory
      ? (caseHistory.lossOfCloseIndividual as CaseHistoryIndividualType[])
      : null,
    ageDuringLossOfCloseIndividual: caseHistory ? caseHistory.ageDuringLossOfCloseIndividual : null,
    // adoption
    adoptionAge: caseHistory ? caseHistory.adoptionAge : null,
    numberOfAdoptions: caseHistory ? caseHistory.numberOfAdoptions : null,
    reasonOfMultipleAdoptions: caseHistory
      ? (caseHistory.reasonOfMultipleAdoptions as CaseHistoryReasonOfMultipleAdoptionsType[])
      : null,
    // education
    schoolMark: caseHistory ? caseHistory.schoolMark : null,
    attendsKindergarten: caseHistory ? caseHistory.attendsKindergarten : null,
    diagnosedIntelectualDevelopmentProblems: caseHistory
      ? caseHistory.diagnosedIntelectualDevelopmentProblems
      : null,
    adaptedEducationProgram: caseHistory ? caseHistory.adaptedEducationProgram : null,
    individualizedEducationProgram: caseHistory ? caseHistory.individualizedEducationProgram : null,
    // abuses
    furtherAbuses: caseHistory ? (caseHistory.furtherAbuses as CaseHistoryAbuseType[]) : null,
    reportedFurtherAbuses: caseHistory
      ? (caseHistory.reportedFurtherAbuses as CaseHistoryReportedAbuseType)
      : null,
    // other
    familyHeredity: caseHistory ? caseHistory.familyHeredity : null,
    ptsp: caseHistory ? caseHistory.ptsp : null,
  }),
);
