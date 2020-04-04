module.exports = {
    Relationships : {
        description : 'Below is a list of relational tables, with descriptions of their relationships. In most cases these tables are not intended to be queried directly, but instead they support other tables.',
        entries : {}
    },
    Structures : {
        description : 'Below is a list of tables that can be queried, with descriptions of their columns, column types, and relationships.',
        entries : {
            augmentations : "Note: Biotech is a boolean.",
            class_features : "All entries here belong to a class, specified by `class_id`. Features are parents of many ClassSpecialSkill entries, found in `class_special_skills`.",
            class_special_skills : "These entries are all subordinate to a ClassFeature object, and in some cases they are additionally subordinate to another ClassSpecialSkill within this table (referenced by the column `parent_id`)"
        }
    }
}