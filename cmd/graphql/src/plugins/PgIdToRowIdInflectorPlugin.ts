/**
 *
 * TODO-db-210414 @name and @fieldName should take precidence
 *
 * PgIdToRowIdInflectorPlugin
 *
 * When using *Postgraphile* in combination with *Relay Modern* there must be a field
 * named `id` which is globally unique. This field can be used to get any node from
 * GraphQL. However, when using this option (`classicIds`) with Postgres all fields
 * defined in Postgres as `id` will be renamed to `rowId` to allow GraphQL to create
 * the globally unique `id` field (Base64 tuple of [tablename, id]). This raises
 * inconsistencies within the schema because Postgres fields named `user_id` will
 * NOT be renamed!
 *
 * This plugin renames such fields and mutation arguments to suffix `row_id`.
 * Ex:
 *  `user_id` -> `user_row_id`
 *  `article_id` -> `article_row_id`
 *  `article_id_is_missing` -> `article_row_id_is_missing`
 *  `articleId` -> `articleRowId`
 *  `articleIdIsMissing` -> `articleRowIdIsMissing`
 *  `user_row_id` -> `user_row_id` (will stay the same if `id` is prefixed with `row_`)
 *  `userRowId` -> `userRowId` (will stay the same if `Id` is prefixed with `Row`)
 *  `paid_date` -> `paid_date` (will stay the same if `id` is prefixed **any** letter)
 *  `lids_closed` -> `lids_closed` (will stay the same if `ids` is prefixed **any** letter)
 *  `languageIdiomatics` -> `languageIdiomatics` (will stay the same if `Id` is suffixed with a lowercase letter)
 *  `language_idiomatics` -> `language_idiomatics` (will stay the same if `id` is NOT suffixed with an underscore)
 */
import { makeAddInflectorsPlugin } from 'graphile-utils';
import { camelCase, PgAttribute, PgProc } from 'graphile-build-pg';

function replaceIdWithRowId(str: string) {
  return str
    .replace(/(?<!(row_)|[a-zA-Z])(id)(?=_|$)/, 'row_id')
    .replace(/(?<!((R|r)ow))(Id)(?=[A-Z]|$)/, 'RowId')
    .replace(/(?<!(row_)|[a-zA-Z])(ids)(?=_|$)/, 'row_ids')
    .replace(/(?<!((R|r)ow))(Ids)(?=[A-Z]|$)/, 'RowIds');
}

export const PgIdToRowIdInflectorPlugin = makeAddInflectorsPlugin(
  {
    // replace ids in all column
    column({ tags, name }: PgAttribute) {
      if (tags.name) {
        if (typeof tags.name !== 'string') {
          throw new Error(
            'PgIdToRowIdInflectorPlugin: column tag name should be string but is not',
          );
        }
        return camelCase(tags.name);
      }

      return camelCase(replaceIdWithRowId(name));
    },
    // replace ids in all computed columns
    computedColumn(pseudoColumnName: string, { tags }: PgProc) {
      if (tags.fieldName) {
        if (typeof tags.fieldName !== 'string') {
          throw new Error(
            'PgIdToRowIdInflectorPlugin: computedColumn tag name should be string but is not',
          );
        }
        return tags.fieldName;
      }
      return camelCase(replaceIdWithRowId(pseudoColumnName));
    },
    // replace ids in all mutation arguments
    argument(name: string, index: number) {
      return camelCase(replaceIdWithRowId(name || `arg${index}`));
    },
  },
  true,
);
