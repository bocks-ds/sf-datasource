==========
Structures
==========

Below is a list of tables that can be queried, with descriptions of their columns, column types, and relationships.

*****

abilities
*********



Columns that may be queried:
 - ``id`` - *Number*

 - ``name`` - *String with a maximum length of 12*

 - ``shorthand`` - *String with a maximum length of 3*

 - ``description`` - *String with a maximum length of 1324*


*****


ammunition
**********



Columns that may be queried:
 - ``id`` - *Number*

 - ``name`` - *String with a maximum length of 34*

 - ``level`` - *Number*

 - ``price`` - *Number*

 - ``charges`` - *Number*

 - ``bulk`` - *Number*

 - ``special`` - *String with a maximum length of 45*


*****


armor
*****



Columns that may be queried:
 - ``id`` - *Number*

 - ``name`` - *String with a maximum length of 56*

 - ``type`` - *Number*

 - ``level`` - *Number*

 - ``price`` - *Number*

 - ``eac_bonus`` - *Number*

 - ``kac_bonus`` - *Number*

 - ``max_dex_bonus`` - *Number*

 - ``ac_penalty`` - *Number*

 - ``speed_penalty`` - *Number*

 - ``upgrade_slots`` - *Number*

 - ``bulk`` - *Number*

 - ``description`` - *String with a maximum length of 667*


*****


armor_upgrades
**************



Columns that may be queried:
 - ``id`` - *Number*

 - ``name`` - *String with a maximum length of 38*

 - ``level`` - *Number*

 - ``price`` - *Number*

 - ``slots`` - *Number*

 - ``armor_type`` - *String with a maximum length of 18*

 - ``bulk`` - *String with a maximum length of 1*


*****


augmentations
*************

Note: Biotech is a boolean.

Columns that may be queried:
 - ``id`` - *Number*

 - ``name`` - *String with a maximum length of 32*

 - ``system`` - *String with a maximum length of 15*

 - ``model`` - *String with a maximum length of 12*

 - ``level`` - *Number*

 - ``price`` - *Number*

 - ``biotech`` - *Number*


*****


class_features
**************

All entries here belong to a class, specified by `class_id`. Features are parents of many ClassSpecialSkill entries, found in `class_special_skills`.

Columns that may be queried:
 - ``classes`` - *Class; References a single element from classes*

 - ``name`` - *String with a maximum length of 37*

 - ``level`` - *Number*

 - ``description`` - *String with a maximum length of 4062*

Relationships that may be queried:
  - ``class_special_skills`` - *ClassSpecialSkill; Entry from* ``class_special_skills``


*****


class_special_skills
********************

These entries are all subordinate to a ClassFeature object, and in some cases they are additionally subordinate to another ClassSpecialSkill within this table (referenced by the column `parent_id`)

Columns that may be queried:
 - ``class_features`` - *ClassFeature; References a single element from class_features*

 - ``parent`` - *References a single element from this table*

 - ``level`` - *Number*

 - ``name`` - *String with a maximum length of 53*

 - ``description`` - *String with a maximum length of 2615*


*****


classes
*******



Columns that may be queried:
 - ``id`` - *Number*

 - ``name`` - *String with a maximum length of 12*

 - ``description`` - *String with a maximum length of 1100*

 - ``hit_points`` - *Number*

 - ``stamina_points`` - *Number*

 - ``key_ability_score_text`` - *String with a maximum length of 475*

 - ``key_ability_score`` - *String with a maximum length of 25*

 - ``skills_per_level`` - *Number*

Relationships that may be queried:
  - ``class_proficiencies`` - *Feat; Entry from* ``feats`` *table; Resolved via class_proficiencies*

  - ``class_features`` - *ClassFeature; Entry from* ``class_features``


*****


descriptors
***********



Columns that may be queried:
 - ``id`` - *Number*

 - ``name`` - *String with a maximum length of 228*

 - ``description`` - *String with a maximum length of 2178*


*****


envoy_progression
*****************



Columns that may be queried:
 - ``level`` - *Number*

 - ``base_attack_bonus`` - *Number*

 - ``fort_save_bonus`` - *Number*

 - ``ref_save_bonus`` - *Number*

 - ``will_save_bonus`` - *Number*

 - ``class_features`` - *String with a maximum length of 72*


*****


equipment
*********



Columns that may be queried:
 - ``id`` - *Number*

 - ``name`` - *String with a maximum length of 20*

 - ``type`` - *String with a maximum length of 13*

 - ``price`` - *Number*

 - ``bulk`` - *Number*

 - ``level`` - *Number*


*****


feats
*****



Columns that may be queried:
 - ``id`` - *Number*

 - ``modifiers`` - *Modifier; References a single element from modifiers*

 - ``name`` - *String with a maximum length of 56*

 - ``tagline`` - *String with a maximum length of 166*

 - ``prerequisite_text`` - *String with a maximum length of 118*

 - ``description`` - *String with a maximum length of 145*

 - ``benefit`` - *String with a maximum length of 1711*

 - ``extra_text`` - *String with a maximum length of 257*

 - ``combat_feat`` - *Number*


*****


mechanic_progression
********************



Columns that may be queried:
 - ``level`` - *Number*

 - ``base_attack_bonus`` - *Number*

 - ``fort_save_bonus`` - *Number*

 - ``ref_save_bonus`` - *Number*

 - ``will_save_bonus`` - *Number*

 - ``class_features`` - *String with a maximum length of 76*


*****


melee_weapons
*************



Columns that may be queried:
 - ``id`` - *Number*

 - ``weapon_categories`` - *WeaponCategory; References a single element from weapon_categories*

 - ``name`` - *String with a maximum length of 38*

 - ``hands`` - *Number*

 - ``level`` - *Number*

 - ``price`` - *Number*

 - ``damage`` - *String with a maximum length of 19*

 - ``critical`` - *String with a maximum length of 19*

 - ``bulk`` - *String with a maximum length of 6*

 - ``special`` - *String with a maximum length of 87*

 - ``powered`` - *Number*

 - ``operative`` - *Number*

 - ``description`` - *String with a maximum length of 1106*

Relationships that may be queried:
  - ``weapon_categories`` - *WeaponCategory; Entry from* ``weapon_categories``


*****


modifiers
*********



Columns that may be queried:
 - ``id`` - *Number*

 - ``name`` - *String with a maximum length of 42*

 - ``effected_stat`` - *String with a maximum length of 19*

 - ``modification`` - *Number*

 - ``description`` - *String with a maximum length of 2870*


*****


mystic_progression
******************



Columns that may be queried:
 - ``level`` - *Number*

 - ``base_attack_bonus`` - *Number*

 - ``fort_save_bonus`` - *Number*

 - ``ref_save_bonus`` - *Number*

 - ``will_save_bonus`` - *Number*

 - ``class_features`` - *String with a maximum length of 79*

 - ``spells_per_day_lvl1`` - *Number*

 - ``spells_per_day_lvl2`` - *Number*

 - ``spells_per_day_lvl3`` - *Number*

 - ``spells_per_day_lvl4`` - *Number*

 - ``spells_per_day_lvl5`` - *Number*

 - ``spells_per_day_lvl6`` - *Number*


*****


operative_progression
*********************



Columns that may be queried:
 - ``level`` - *Number*

 - ``base_attack_bonus`` - *Number*

 - ``fort_save_bonus`` - *Number*

 - ``ref_save_bonus`` - *Number*

 - ``will_save_bonus`` - *Number*

 - ``class_features`` - *String with a maximum length of 127*


*****


personal_upgrades
*****************



Columns that may be queried:
 - ``id`` - *Number*

 - ``name`` - *String with a maximum length of 23*

 - ``level`` - *Number*

 - ``price`` - *Number*

 - ``boost`` - *Number*


*****


races
*****



Columns that may be queried:
 - ``id`` - *Number*

 - ``name`` - *String with a maximum length of 26*

 - ``avg_height`` - *String with a maximum length of 25*

 - ``avg_weight`` - *String with a maximum length of 29*

 - ``age_of_maturity`` - *Number*

 - ``max_age`` - *String with a maximum length of 22*

 - ``description`` - *String with a maximum length of 5324*

 - ``hit_points`` - *Number*

 - ``type`` - *String with a maximum length of 8*

 - ``physical_description`` - *String with a maximum length of 2193*

 - ``homeworld`` - *String with a maximum length of 1182*

 - ``society_and_alignment`` - *String with a maximum length of 2488*

 - ``relations`` - *String with a maximum length of 1543*

 - ``adventurers`` - *String with a maximum length of 1193*

 - ``names`` - *String with a maximum length of 930*


*****


ranged_weapons
**************



Columns that may be queried:
 - ``id`` - *Number*

 - ``name`` - *String with a maximum length of 41*

 - ``weapon_categories`` - *WeaponCategory; References a single element from weapon_categories*

 - ``level`` - *Number*

 - ``price`` - *Number*

 - ``damage`` - *String with a maximum length of 18*

 - ``weapon_range`` - *String with a maximum length of 9*

 - ``critical`` - *String with a maximum length of 19*

 - ``capacity`` - *String with a maximum length of 17*

 - ``ammo_usage`` - *Number*

 - ``bulk`` - *String with a maximum length of 6*

 - ``special`` - *String with a maximum length of 69*

 - ``description`` - *String with a maximum length of 727*

Relationships that may be queried:
  - ``weapon_categories`` - *WeaponCategory; Entry from* ``weapon_categories``


*****


skills
******



Columns that may be queried:
 - ``id`` - *Number*

 - ``name`` - *String with a maximum length of 19*

 - ``abilities`` - *Ability; References a single element from abilities*

 - ``description`` - *String with a maximum length of 2531*

 - ``untrained`` - *Number*

 - ``ac_penalty`` - *Number*

 - ``envoy`` - *Number*

 - ``mechanic`` - *Number*

 - ``mystic`` - *Number*

 - ``operative`` - *Number*

 - ``solarian`` - *Number*

 - ``soldier`` - *Number*

 - ``technomancer`` - *Number*


*****


solarian_crystals
*****************



Columns that may be queried:
 - ``id`` - *Number*

 - ``name`` - *String with a maximum length of 32*

 - ``level`` - *Number*

 - ``price`` - *Number*

 - ``damage`` - *String with a maximum length of 8*

 - ``critical`` - *String with a maximum length of 14*

 - ``description`` - *String with a maximum length of 163*


*****


solarian_progression
********************



Columns that may be queried:
 - ``level`` - *Number*

 - ``base_attack_bonus`` - *Number*

 - ``fort_save_bonus`` - *Number*

 - ``ref_save_bonus`` - *Number*

 - ``will_save_bonus`` - *Number*

 - ``class_features`` - *String with a maximum length of 125*

 - ``Solar_Armor`` - *String with a maximum length of 28*

 - ``Solar_Weapon`` - *String with a maximum length of 4*


*****


soldier_progression
*******************



Columns that may be queried:
 - ``level`` - *Number*

 - ``base_attack_bonus`` - *Number*

 - ``fort_save_bonus`` - *Number*

 - ``ref_save_bonus`` - *Number*

 - ``will_save_bonus`` - *Number*

 - ``class_features`` - *String with a maximum length of 96*


*****


spells
******



Columns that may be queried:
 - ``id`` - *Number*

 - ``name`` - *String with a maximum length of 29*

 - ``mystic_level`` - *Number*

 - ``technomancer_level`` - *Number*

 - ``description`` - *String with a maximum length of 571*

 - ``long_description`` - *String with a maximum length of 5331*

 - ``magic_schools`` - *MagicSchool; References a single element from magic_schools*

 - ``casting_time`` - *String with a maximum length of 65*

 - ``effect_ranges`` - *EffectRange; References a single element from effect_ranges*

 - ``area`` - *String with a maximum length of 53*

 - ``targets`` - *String with a maximum length of 227*

 - ``duration`` - *String with a maximum length of 230*

 - ``saving_throw`` - *String with a maximum length of 62*

 - ``spell_resistance`` - *Number*

Relationships that may be queried:
  - ``spell_descriptors`` - *Descriptor; Entry from* ``descriptors`` *table; Resolved via spell_descriptors*

  - ``effect_ranges`` - *EffectRange; Entry from* ``effect_ranges``

  - ``magic_schools`` - *MagicSchool; Entry from* ``magic_schools``


*****


tech_items
**********



Columns that may be queried:
 - ``id`` - *Number*

 - ``type`` - *String with a maximum length of 17*

 - ``name`` - *String with a maximum length of 39*

 - ``level`` - *Number*

 - ``price`` - *Number*

 - ``hands`` - *Number*

 - ``bulk`` - *String with a maximum length of 10*

 - ``capacity`` - *Number*

 - ``item_usage`` - *String with a maximum length of 13*


*****


technomancer_progression
************************



Columns that may be queried:
 - ``level`` - *Number*

 - ``base_attack_bonus`` - *Number*

 - ``fort_save_bonus`` - *Number*

 - ``ref_save_bonus`` - *Number*

 - ``will_save_bonus`` - *Number*

 - ``class_features`` - *String with a maximum length of 61*

 - ``spells_per_day_lvl1`` - *Number*

 - ``spells_per_day_lvl2`` - *Number*

 - ``spells_per_day_lvl3`` - *Number*

 - ``spells_per_day_lvl4`` - *Number*

 - ``spells_per_day_lvl5`` - *Number*

 - ``spells_per_day_lvl6`` - *Number*


*****


themes
******



Columns that may be queried:
 - ``id`` - *Number*

 - ``name`` - *String with a maximum length of 15*

 - ``description`` - *String with a maximum length of 740*

 - ``level_1`` - *String with a maximum length of 1570*

 - ``level_6`` - *String with a maximum length of 981*

 - ``level_12`` - *String with a maximum length of 792*

 - ``level_18`` - *String with a maximum length of 721*

Relationships that may be queried:
  - ``theme_modifiers`` - *Modifier; Entry from* ``modifiers`` *table; Resolved via theme_modifiers*


*****


weapon_categories
*****************



Columns that may be queried:
 - ``id`` - *Number*

 - ``type`` - *String with a maximum length of 19*

 - ``hands`` - *Number*

 - ``category`` - *String with a maximum length of 13*


*****


weapon_fusions
**************



Columns that may be queried:
 - ``id`` - *Number*

 - ``name`` - *String with a maximum length of 14*

 - ``level`` - *Number*

 - ``description`` - *String with a maximum length of 1733*


*****


