module.exports = {
    spell_descriptors: {
        model_name: "Descriptor",
        junction_target: 'descriptors',
        supported_tables: ['spells'],
    },
    theme_modifiers: {
        model_name: "Modifier",
        junction_target: 'modifiers',
        supported_tables: ['themes'],
    },
    class_proficiencies: {
        model_name: "Feat",
        junction_target: 'feats',
        supported_tables: ['classes'],
    },
    class_features: {
        model_name: "ClassFeature",
        supported_tables: ['classes'],
    },
    class_special_skills: {
        model_name: "ClassSpecialSkills",
        supported_tables: ['class_features'],
    },
    effect_range: {
        model_name: "EffectRange",
        supported_tables: ['spells'],
        direct: true,
    },
    magic_school:  {
        model_name: "MagicSchool",
        supported_tables: ['spells'],
        direct: true,
    },
}