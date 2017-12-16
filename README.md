# tree-shaking
play with treeshaking and how it works with different ways of import/export


Findings:

```export.modules``` doesn't get tree-shaking effectively

```export``` individually + ```import {}``` or ```import * as``` both work effectively
