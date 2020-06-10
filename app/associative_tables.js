module.exports = {
    classes: {
        model_name: 'Class',
        supports: 'spellcaster_progression',
        relationshipType: 'ManyToOne',
    },
    class_proficiencies: {
        model_name: 'Feat',
        supports: 'classes',
        relationshipType: 'ManyToMany',
    },
    class_features: {
        model_name: 'ClassFeature',
        supports: 'classes',
        relationshipType: 'OneToMany',
    },
    class_special_skills: {
        model_name: 'ClassSpecialSkills',
        supports: 'class_features',
        relationshipType: 'OneToMany',
    },
    companion_abilities: {
        model_name: 'CompanionAbility',
        supports: 'companions',
        relationshipType: 'OneToMany',
    },
    effect_ranges: {
        model_name: 'EffectRange',
        supports: 'spells',
        relationshipType: 'ManyToOne',
    },
    weapon_category: {
        model_name: 'WeaponCategory',
        supports: 'weapons',
        relationshipType: 'ManyToOne',
    },
}