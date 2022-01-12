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

func (t Type) Message(lang language.Code, possesiveCase bool) string {
	switch t {
	case TypePsychotherapist:
		if language.BA == lang {
			if possesiveCase {
				return "Psihoterapeuta"
			}
			return "Psihoterapeut"
		}
		return "Psychotherapist"
	case TypePsychologist:
		if language.BA == lang {
			if possesiveCase {
				return "Psihologa"
			}
			return "Psiholog"
		}
		return "Psychologist"
	case TypePsychiatrist:
		if language.BA == lang {
			if possesiveCase {
				return "Psihijatra"
			}
			return "Psihijatar"
		}
		return "Psychiatrist"
	case TypeNeurologist:
		if language.BA == lang {
			if possesiveCase {
				return "Neurologa"
			}
			return "Neurolog"
		}
		return "Neurologist"
	case TypePediatrist:
		if language.BA == lang {
			if possesiveCase {
				return "Pediatara"
			}
			return "Pediatar"
		}
		return "Pediatrist"
	case TypeSocialWorker:
		if language.BA == lang {
			if possesiveCase {
				return "Socialni radnika"
			}
			return "Socialni radnik"
		}
		return "Social worker"
	case TypePedagogue:
		if language.BA == lang {
			if possesiveCase {
				return "Pedagoga"
			}
			return "Pedagog"
		}
		return "Pedagogue"
	case TypeDefectologist:
		if language.BA == lang {
			if possesiveCase {
				return "Defektologa"
			}
			return "Defektolog"
		}
		return "Defectologist"
	case TypePhonetician:
		if language.BA == lang {
			if possesiveCase {
				return "Fonetičara"
			}
			return "Fonetičar"
		}
		return "Phonetician"
	case TypeNeuropsychiatrist:
		if language.BA == lang {
			if possesiveCase {
				return "Neuropsihaijatra"
			}
			return "Neuropsihijatar"
		}
		return "Neuropsychiatrist"
	case TypeClinicalPsychologist:
		if language.BA == lang {
			if possesiveCase {
				return "Klinički psihologa"
			}
			return "Klinički psiholog"
		}
		return "Clinical psychologist"
	case TypeSupervisor:
		if language.BA == lang {
			if possesiveCase {
				return "Supervizora"
			}
			return "Supervizor"
		}
		return "Supervisor"
	case TypeLogoped:
		if language.BA == lang {
			if possesiveCase {
				return "Logopeda"
			}
			return "Logoped"
		}
		return "Logoped"
	case TypeOther:
		if language.BA == lang {
			if possesiveCase {
				return "Ostalo"
			}
			return "Ostalo"
		}
		return "Other"
	default:
		return ""
	}
}
