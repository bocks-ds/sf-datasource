=============
Relationships
=============

Below is a list of relational tables, with descriptions of their relationships. In most cases these tables are not intended to be queried directly, but instead they support other tables.

*****

class_features
**************

This is a **one-to-many** relationship.

This table is referenced by: 
	- ``classes``

-----

class_proficiencies
*******************

This is a **many-to-many** relationship.

This table is referenced by: 
	- ``classes``

This table joins to: 
	-  ``feats``

-----

class_special_skills
********************

This is a **one-to-many** relationship.

This table is referenced by: 
	- ``class_features``
	- ``class_special_skills``

-----

effect_ranges
*************

This is a **many-to-one** relationship.

This table is referenced by: 
	- ``spells``

-----

magic_schools
*************

This is a **many-to-one** relationship.

This table is referenced by: 
	- ``spells``

-----

spell_descriptors
*****************

This is a **many-to-many** relationship.

This table is referenced by: 
	- ``spells``

This table joins to: 
	-  ``descriptors``

-----

theme_modifiers
***************

This is a **many-to-many** relationship.

This table is referenced by: 
	- ``themes``

This table joins to: 
	-  ``modifiers``

-----

weapon_categories
*****************

This is a **many-to-one** relationship.

This table is referenced by: 
	- ``melee_weapons``
	- ``ranged_weapons``

-----

