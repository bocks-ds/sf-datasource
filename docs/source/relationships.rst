class_features
==============
This describes a one-to-many relationship.



The ID from this table is referenced in these tables:
    - classes

class_proficiencies
===================
This describes a many-to-many relationship.



The ID from this table is referenced in these tables:
    - classes

class_special_skills
====================
This describes a one-to-many relationship.



The ID from this table is referenced in these tables:
    - class_features
    - class_special_skills

effect_ranges
=============
This describes a many-to-one relationship.



The ID from this table is referenced in these tables:
    - spells

magic_schools
=============
This describes a many-to-one relationship.



The ID from this table is referenced in these tables:
    - spells

spell_descriptors
=================
This describes a many-to-many relationship.



The ID from this table is referenced in these tables:
    - spells

theme_modifiers
===============
This describes a many-to-many relationship.



The ID from this table is referenced in these tables:
    - themes

weapon_categories
=================
This describes a many-to-one relationship.



The ID from this table is referenced in these tables:
    - melee_weapons
    - ranged_weapons