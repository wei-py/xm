```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */

    /* Projects */
    // "incremental": true,                              /* Save .tsbuildinfo files to allow for incremental compilation of projects. */
    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
    // "tsBuildInfoFile": "./.tsbuildinfo",              /* Specify the path to .tsbuildinfo incremental compilation file. */
    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects. */
    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */

    /* Language and Environment */
    "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    // "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
    // "jsx": "preserve",                                /* Specify what JSX code is generated. */
    // "libReplacement": true,                           /* Enable lib replacement. */
    // "experimentalDecorators": true,                   /* Enable experimental support for legacy experimental decorators. */
    // "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */
    // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h'. */
    // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */
    // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using 'jsx: react-jsx*'. */
    // "reactNamespace": "",                             /* Specify the object invoked for 'createElement'. This only applies when targeting 'react' JSX emit. */
    // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */
    // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */
    // "moduleDetection": "auto",                        /* Control what method is used to detect module-format JS files. */

    /* Modules */
    "module": "commonjs",                                /* Specify what module code is generated. */
    // "rootDir": "./",                                  /* Specify the root folder within your source files. */
    // "moduleResolution": "node10",                     /* Specify how TypeScript looks up a file from a given module specifier. */
    // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
    // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */
    // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */
    // "typeRoots": [],                                  /* Specify multiple folders that act like './node_modules/@types'. */
    // "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */
    // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */
    // "moduleSuffixes": [],                             /* List of file name suffixes to search when resolving a module. */
    // "allowImportingTsExtensions": true,               /* Allow imports to include TypeScript file extensions. Requires '--moduleResolution bundler' and either '--noEmit' or '--emitDeclarationOnly' to be set. */
    // "rewriteRelativeImportExtensions": true,          /* Rewrite '.ts', '.tsx', '.mts', and '.cts' file extensions in relative import paths to their JavaScript equivalent in output files. */
    // "resolvePackageJsonExports": true,                /* Use the package.json 'exports' field when resolving package imports. */
    // "resolvePackageJsonImports": true,                /* Use the package.json 'imports' field when resolving imports. */
    // "customConditions": [],                           /* Conditions to set in addition to the resolver-specific defaults when resolving imports. */
    // "noUncheckedSideEffectImports": true,             /* Check side effect imports. */
    // "resolveJsonModule": true,                        /* Enable importing .json files. */
    // "allowArbitraryExtensions": true,                 /* Enable importing files with any extension, provided a declaration file is present. */
    // "noResolve": true,                                /* Disallow 'import's, 'require's or '<reference>'s from expanding the number of files TypeScript should add to a project. */

    /* JavaScript Support */
    // "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */
    // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
    // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from 'node_modules'. Only applicable with 'allowJs'. */

    /* Emit */
    // "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
    // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
    // "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */
    // "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
    // "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */
    // "noEmit": true,                                   /* Disable emitting files from a compilation. */
    // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. */
    // "outDir": "./",                                   /* Specify an output folder for all emitted files. */
    // "removeComments": true,                           /* Disable emitting comments. */
    // "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */
    // "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */
    // "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */
    // "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */
    // "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */
    // "newLine": "crlf",                                /* Set the newline character for emitting files. */
    // "stripInternal": true,                            /* Disable emitting declarations that have '@internal' in their JSDoc comments. */
    // "noEmitHelpers": true,                            /* Disable generating custom helper functions like '__extends' in compiled output. */
    // "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */
    // "preserveConstEnums": true,                       /* Disable erasing 'const enum' declarations in generated code. */
    // "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */

    /* Interop Constraints */
    // "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */
    // "verbatimModuleSyntax": true,                     /* Do not transform or elide any imports or exports not marked as type-only, ensuring they are written in the output file's format based on the 'module' setting. */
    // "isolatedDeclarations": true,                     /* Require sufficient annotation on exports so other tools can trivially generate declaration files. */
    // "erasableSyntaxOnly": true,                       /* Do not allow runtime constructs that are not part of ECMAScript. */
    // "allowSyntheticDefaultImports": true,             /* Allow 'import x from y' when a module doesn't have a default export. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */

    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */
    // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
    // "strictBindCallApply": true,                      /* Check that the arguments for 'bind', 'call', and 'apply' methods match the original function. */
    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
    // "strictBuiltinIteratorReturn": true,              /* Built-in iterators are instantiated with a 'TReturn' type of 'undefined' instead of 'any'. */
    // "noImplicitThis": true,                           /* Enable error reporting when 'this' is given the type 'any'. */
    // "useUnknownInCatchVariables": true,               /* Default catch clause variables as 'unknown' instead of 'any'. */
    // "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
    // "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */
    // "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read. */
    // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
    // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
    // "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */
    // "noUncheckedIndexedAccess": true,                 /* Add 'undefined' to a type when accessed using an index. */
    // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
    // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type. */
    // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
    // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */

    /* Completeness */
    // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  }
}
```

```json
{
  "compilerOptions": {
    /* 访问 https://aka.ms/tsconfig 以了解更多关于此文件的信息 */

    /* 项目配置 */
    // "incremental": true,                              /* 保存 .tsbuildinfo 文件，以支持项目的增量编译。 */
    // "composite": true,                                /* 启用约束，使 TypeScript 项目可用于项目引用。 */
    // "tsBuildInfoFile": "./.tsbuildinfo",              /* 指定增量编译文件 .tsbuildinfo 的路径。 */
    // "disableSourceOfProjectReferenceRedirect": true,  /* 禁用在引用复合项目时优先使用源文件而非声明文件的行为。 */
    // "disableSolutionSearching": true,                 /* 编辑时，将项目排除在多项目引用检查之外。 */
    // "disableReferencedProjectLoad": true,             /* 减少 TypeScript 自动加载的项目数量。 */

    /* 语言和环境 */
    "target": "es2016",                                  /* 设置生成的 JavaScript 的语言版本，并包含兼容的库声明。 */
    // "lib": [],                                        /* 指定一组描述目标运行环境的内置库声明文件。 */
    // "jsx": "preserve",                                /* 指定生成的 JSX 代码类型。 */
    // "libReplacement": true,                           /* 启用库替换功能。 */
    // "experimentalDecorators": true,                   /* 启用对旧版实验性装饰器的实验性支持。 */
    // "emitDecoratorMetadata": true,                    /* 为源文件中带装饰器的声明生成设计类型元数据。 */
    // "jsxFactory": "",                                 /* 指定在生成 React JSX 时使用的 JSX 工厂函数，例如 'React.createElement' 或 'h'。 */
    // "jsxFragmentFactory": "",                         /* 指定在生成 React JSX 时用于片段（fragments）的 JSX Fragment 引用，例如 'React.Fragment' 或 'Fragment'。 */
    // "jsxImportSource": "",                            /* 当使用 'jsx: react-jsx*' 时，指定用于导入 JSX 工厂函数的模块标识符。 */
    // "reactNamespace": "",                             /* 指定调用 'createElement' 的对象。仅在生成 'react' JSX 时生效。 */
    // "noLib": true,                                    /* 禁用包含任何库文件，包括默认的 lib.d.ts。 */
    // "useDefineForClassFields": true,                  /* 以符合 ECMAScript 标准的方式生成类字段。 */
    // "moduleDetection": "auto",                        /* 控制检测模块格式的 JS 文件所使用的方法。 */

    /* 模块 */
    "module": "commonjs",                                /* 指定生成的模块代码格式。 */
    // "rootDir": "./",                                  /* 指定源文件的根目录。 */
    // "moduleResolution": "node10",                     /* 指定 TypeScript 如何根据模块标识符查找文件。 */
    // "baseUrl": "./",                                  /* 指定解析非相对模块名称的基准目录。 */
    // "paths": {},                                      /* 指定一组条目，用于将导入重新映射到额外的查找位置。 */
    // "rootDirs": [],                                   /* 允许多个文件夹在解析模块时被视为一个整体。 */
    // "typeRoots": [],                                  /* 指定多个文件夹，其行为类似于 './node_modules/@types'。 */
    // "types": [],                                      /* 指定无需在源文件中引用即可包含的类型包名称。 */
    // "allowUmdGlobalAccess": true,                     /* 允许从模块中访问 UMD 全局变量。 */
    // "moduleSuffixes": [],                             /* 列出解析模块时搜索的文件名后缀。 */
    // "allowImportingTsExtensions": true,               /* 允许导入包含 TypeScript 文件扩展名的模块。需要设置 '--moduleResolution bundler' 以及 '--noEmit' 或 '--emitDeclarationOnly'。 */
    // "rewriteRelativeImportExtensions": true,          /* 在输出文件中，将相对导入路径中的 '.ts'、'.tsx'、'.mts' 和 '.cts' 扩展名重写为其对应的 JavaScript 扩展名。 */
    // "resolvePackageJsonExports": true,                /* 在解析包导入时使用 package.json 的 'exports' 字段。 */
    // "resolvePackageJsonImports": true,                /* 在解析导入时使用 package.json 的 'imports' 字段。 */
    // "customConditions": [],                           /* 在解析导入时，除了解析器默认条件外，额外设置的条件。 */
    // "noUncheckedSideEffectImports": true,             /* 检查有副作用的导入。 */
    // "resolveJsonModule": true,                        /* 启用导入 .json 文件。 */
    // "allowArbitraryExtensions": true,                 /* 允许导入任意扩展名的文件，前提是存在对应的声明文件。 */
    // "noResolve": true,                                /* 禁止 'import'、'require' 或 '<reference>' 扩展 TypeScript 项目包含的文件数量。 */

    /* JavaScript 支持 */
    // "allowJs": true,                                  /* 允许 JavaScript 文件作为程序的一部分。使用 'checkJs' 选项可从这些文件中获取错误提示。 */
    // "checkJs": true,                                  /* 在类型检查的 JavaScript 文件中启用错误报告。 */
    // "maxNodeModuleJsDepth": 1,                        /* 指定从 'node_modules' 中检查 JavaScript 文件的最大文件夹深度。仅在启用 'allowJs' 时有效。 */

    /* 输出 */
    // "declaration": true,                              /* 从项目中的 TypeScript 和 JavaScript 文件生成 .d.ts 声明文件。 */
    // "declarationMap": true,                           /* 为 .d.ts 文件生成 source map。 */
    // "emitDeclarationOnly": true,                      /* 仅输出 .d.ts 文件，不输出 JavaScript 文件。 */
    // "sourceMap": true,                                /* 为生成的 JavaScript 文件创建 source map 文件。 */
    // "inlineSourceMap": true,                          /* 将 source map 文件内容内联到生成的 JavaScript 中。 */
    // "noEmit": true,                                   /* 禁用编译时输出任何文件。 */
    // "outFile": "./",                                  /* 指定一个将所有输出打包成单个 JavaScript 文件的路径。如果 'declaration' 为 true，则也用于打包所有 .d.ts 输出。 */
    // "outDir": "./",                                   /* 指定所有生成文件的输出目录。 */
    // "removeComments": true,                           /* 禁止输出注释。 */
    // "importHelpers": true,                            /* 允许从 tslib 中一次性导入辅助函数，而不是每个文件都包含。 */
    // "downlevelIteration": true,                       /* 为迭代生成更兼容但更冗长且性能较低的 JavaScript。 */
    // "sourceRoot": "",                                 /* 指定调试器查找源代码的根路径。 */
    // "mapRoot": "",                                    /* 指定调试器查找 map 文件的位置，而不是使用生成的路径。 */
    // "inlineSources": true,                            /* 将源代码内联到生成的 JavaScript 的 source map 中。 */
    // "emitBOM": true,                                  /* 在输出文件开头添加 UTF-8 字节顺序标记（BOM）。 */
    // "newLine": "crlf",                                /* 设置输出文件的换行符。 */
    // "stripInternal": true,                            /* 禁止输出带有 '@internal' JSDoc 注释的声明。 */
    // "noEmitHelpers": true,                            /* 禁止生成 '__extends' 等自定义辅助函数。 */
    // "noEmitOnError": true,                            /* 如果存在类型检查错误，则禁止输出文件。 */
    // "preserveConstEnums": true,                       /* 禁止在生成的代码中删除 'const enum' 声明。 */
    // "declarationDir": "./",                           /* 指定生成的声明文件的输出目录。 */

    /* 模块互操作约束 */
    // "isolatedModules": true,                          /* 确保每个文件可以安全地单独转译，不依赖其他导入。 */
    // "verbatimModuleSyntax": true,                     /* 不转换或省略未标记为仅类型的导入或导出，确保它们根据 'module' 设置以输出格式书写。 */
    // "isolatedDeclarations": true,                     /* 要求导出有足够的注解，以便其他工具能轻松生成声明文件。 */
    // "erasableSyntaxOnly": true,                       /* 不允许运行时存在的非 ECMAScript 语法结构。 */
    // "allowSyntheticDefaultImports": true,             /* 当模块没有默认导出时，允许使用 'import x from y' 语法。 */
    "esModuleInterop": true,                             /* 生成额外的 JavaScript 代码，以简化对 CommonJS 模块的导入支持。此选项会启用 'allowSyntheticDefaultImports' 以实现类型兼容。 */
    // "preserveSymlinks": true,                         /* 禁用将符号链接解析为其真实路径。这与 Node.js 中的同名标志一致。 */
    "forceConsistentCasingInFileNames": true,            /* 强制文件名中的大小写必须一致，避免导入时出现大小写错误。 */

    /* 类型检查 */
    "strict": true,                                      /* 启用所有严格的类型检查选项。 */
    // "noImplicitAny": true,                            /* 启用对隐式 'any' 类型的表达式和声明的错误报告。 */
    // "strictNullChecks": true,                         /* 类型检查时，考虑 'null' 和 'undefined'。 */
    // "strictFunctionTypes": true,                      /* 在函数赋值时，检查参数和返回值是否类型兼容。 */
    // "strictBindCallApply": true,                      /* 检查 'bind'、'call' 和 'apply' 方法的参数是否与原函数匹配。 */
    // "strictPropertyInitialization": true,             /* 检查类中声明但未在构造函数中赋值的属性。 */
    // "strictBuiltinIteratorReturn": true,              /* 内置迭代器的 'TReturn' 类型默认为 'undefined' 而非 'any'。 */
    // "noImplicitThis": true,                           /* 当 'this' 被推断为 'any' 类型时，启用错误报告。 */
    // "useUnknownInCatchVariables": true,               /* 默认将 catch 子句中的变量类型设为 'unknown' 而非 'any'。 */
    // "alwaysStrict": true,                             /* 确保始终生成 'use strict' 指令。 */
    // "noUnusedLocals": true,                           /* 启用对未读取的局部变量的错误报告。 */
    // "noUnusedParameters": true,                       /* 当函数参数未被使用时，抛出错误。 */
    // "exactOptionalPropertyTypes": true,               /* 按原样解释可选属性类型，不自动添加 'undefined'。 */
    // "noImplicitReturns": true,                        /* 启用对函数中未显式返回的代码路径的错误报告。 */
    // "noFallthroughCasesInSwitch": true,               /* 在 switch 语句中启用对“穿透”情况的错误报告。 */
    // "noUncheckedIndexedAccess": true,                 /* 使用索引访问类型时，自动将 'undefined' 添加到类型中。 */
    // "noImplicitOverride": true,                       /* 确保派生类中重写成员时必须使用 override 修饰符。 */
    // "noPropertyAccessFromIndexSignature": true,       /* 强制对索引签名中声明的键使用索引访问器。 */
    // "allowUnusedLabels": true,                        /* 禁用对未使用标签的错误报告。 */
    // "allowUnreachableCode": true,                     /* 禁用对不可达代码的错误报告。 */

    /* 完整性 */
    // "skipDefaultLibCheck": true,                      /* 跳过对 TypeScript 自带的 .d.ts 文件的类型检查。 */
    "skipLibCheck": true                                 /* 跳过对所有 .d.ts 文件的类型检查。 */
  }
}
```
