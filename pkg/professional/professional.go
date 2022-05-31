package professional

import "github.com/domonda/go-types/language"

type Type string

const (
	TypePsychotherapist      Type = "PSYCHOTHERAPIST"
	TypePsychologist         Type = "PSYCHOLOGIST"
	TypePsychiatrist         Type = "PSYCHIATRIST"
	TypeNeurologist          Type = "NEUROLOGIST"
	TypePediatrist           Type = "PEDIATRIST"
	TypeSocialWorker         Type = "SOCIAL_WORKER"
	TypePedagogue            Type = "PEDAGOGUE"
	TypeDefectologist        Type = "DEFECTOLOGIST"
	TypePhonetician          Type = "PHONETICIAN"
	TypeNeuropsychiatrist    Type = "NEUROPSYCHIATRIST"
	TypeClinicalPsychologist Type = "CLINICAL_PSYCHOLOGIST"
	TypeSupervisor           Type = "SUPERVISOR"
	TypeLogoped              Type = "LOGOPED"
	TypeOther                Type = "OTHER"
)

func (t Type) Message(lang language.Code) string {
	switch t {
	case TypePsychotherapist:
		if language.BA == lang {
			return "Psihoterapeut"
		}
		return "Psychotherapist"
	case TypePsychologist:
		if language.BA == lang {
			return "Psiholog"
		}
		return "Psychologist"
	case TypePsychiatrist:
		if language.BA == lang {
			return "Psihijatar"
		}
		return "Psychiatrist"
	case TypeNeurologist:
		if language.BA == lang {
			return "Neurolog"
		}
		return "Neurologist"
	case TypePediatrist:
		if language.BA == lang {
			return "Pediatar"
		}
		return "Pediatrist"
	case TypeSocialWorker:
		if language.BA == lang {
			return "Socialni radnik"
		}
		return "Social worker"
	case TypePedagogue:
		if language.BA == lang {
			return "Pedagog"
		}
		return "Pedagogue"
	case TypeDefectologist:
		if language.BA == lang {
			return "Defektolog"
		}
		return "Defectologist"
	case TypePhonetician:
		if language.BA == lang {
			return "Fonetičar"
		}
		return "Phonetician"
	case TypeNeuropsychiatrist:
		if language.BA == lang {
			return "Neuropsihijatar"
		}
		return "Neuropsychiatrist"
	case TypeClinicalPsychologist:
		if language.BA == lang {
			return "Klinički psiholog"
		}
		return "Clinical psychologist"
	case TypeSupervisor:
		if language.BA == lang {
			return "Supervizor"
		}
		return "Supervisor"
	case TypeLogoped:
		if language.BA == lang {
			return "Logoped"
		}
		return "Logoped"
	case TypeOther:
		if language.BA == lang {
			return "Ostalo"
		}
		return "Other"
	default:
		return ""
	}
}
