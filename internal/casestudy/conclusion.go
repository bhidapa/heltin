package casestudy

import "github.com/domonda/go-types/language"

type ConclusionType string

const (
	ConclusionTypeTreatmentCompletion  ConclusionType = "TREATMENT_COMPLETION"
	ConclusionTypeCancellationByClient ConclusionType = "CANCELLATION_BY_CLIENT"
	ConclusionTypeCancellationByParent ConclusionType = "CANCELLATION_BY_PARENT"
	ConclusionTypeFurtherReferral      ConclusionType = "FURTHER_REFERRAL"
)

func (t ConclusionType) Message(lang language.Code) string {
	switch t {
	case ConclusionTypeTreatmentCompletion:
		if language.BA == lang {
			return "Završeno liječenje"
		}
		return "Treatment complete"
	case ConclusionTypeCancellationByClient:
		if language.BA == lang {
			return "Otkazano od strane klijenta"
		}
		return "Canceled by client"
	case ConclusionTypeCancellationByParent:
		if language.BA == lang {
			return "Otkazano od strane roditelja"
		}
		return "Canceled by parent"
	case ConclusionTypeFurtherReferral:
		if language.BA == lang {
			return "Poslan dalje"
		}
		return "Referred further"
	default:
		return ""
	}
}
