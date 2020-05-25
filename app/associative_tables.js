module.exports = {
    // spell_descriptors: {
    //     model_name: "Descriptor",
    //     joins_to: 'descriptors',
    //     supports: ['spells'],
    // },
    // theme_modifiers: {
    //     model_name: "Modifier",
    //     joins_to: 'modifiers',
    //     supports: ['themes'],
    // },
    // class_proficiencies: {
    //     model_name: "Feat",
    //     joins_to: 'feats',
    //     supports: ['classes'],
    // },
    // class_features: {
    //     model_name: "ClassFeature",
    //     supports: ['classes'],
    // },
    // class_special_skills: {
    //     model_name: "ClassSpecialSkills",
    //     supports: ['class_features', 'class_special_skills'],
    // },
    weapon_category: {
        model_name: "WeaponCategory",
        supports: 'weapons',
        relationshipType: 'ManyToOne',
    },
    // effect_ranges: {
    //     model_name: "EffectRange",
    //     supports: ['spells'],
    //     direct: true,
    // },
    // magic_schools:  {
    //     model_name: "MagicSchool",
    //     supports: ['spells'],
    //     direct: true,
    // },
    companion_abilities: {
        model_name: "CompanionAbility",
        supports: 'companions',
        relationshipType: 'OneToMany',
    },
}