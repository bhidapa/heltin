package treatments

import (
	"time"

	"github.com/domonda/go-types/nullable"
	"github.com/domonda/go-types/uu"
)

type Treatment struct {
	ID uu.ID `db:"id,pk"`

	CaseStudyID uu.ID `db:"case_study_id"`

	External bool `db:"external"`

	StartedAt time.Time `db:"started_at"`
	EndedAt   time.Time `db:"ended_at"`

	Title              string                  `db:"title"`
	Description        nullable.NonEmptyString `db:"description"`
	PrivateDescription nullable.NonEmptyString `db:"private_description"`

	Score *uint8 `db:"score"` // check(score >= 1 and score <= 5),

	CreatedBy uu.ID         `db:"created_by"`
	UpdatedBy uu.NullableID `db:"updated_by"`

	CreatedAt time.Time `db:"created_at"`
	UpdatedAt time.Time `db:"updated_at"`
}
