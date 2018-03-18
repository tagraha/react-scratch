#### 1.6.1 (2018-03-18)

##### Build System / Dependencies

* **css:**  minifying css output ([1baed3c3](https://github.com/tagraha/react-scratch/commit/1baed3c3c32e07e861804b48129818ff55d8aebf))

### 1.6.0 (2018-03-18)

##### Build System / Dependencies

* **sw:**  Lighthouse PWA score enhancement with service worker ([68037bfe](https://github.com/tagraha/react-scratch/commit/68037bfe161750c9d9bc14a5eec523b41f7a69a9))
* **output:**  change output folder destination ([973c0e05](https://github.com/tagraha/react-scratch/commit/973c0e05dec8e3a067c1cf7dac39c963be56802c))
* **lighthouse:**  improving lighthouse score for accessibility ([e016c752](https://github.com/tagraha/react-scratch/commit/e016c752ac65388407163ed1a99c71e464cfc108))
* **css output:**  minimize css output ([0a538c5b](https://github.com/tagraha/react-scratch/commit/0a538c5ba70493b6396701ccffb9c10f27df997b))
* **component:**  separating container & component ([8e9f2ed3](https://github.com/tagraha/react-scratch/commit/8e9f2ed308bd6b2756559d7c8281918431d42295))
* **chunkhash:**  remove chunkhash ([155b280c](https://github.com/tagraha/react-scratch/commit/155b280c390def1dec6f8e29b9bdded5649368c6))

##### New Features

* **sw:**  adding sw-precache ([5aa068ad](https://github.com/tagraha/react-scratch/commit/5aa068ad3162c5e39a82f24da5c2186431960f94))

##### Bug Fixes

* **reducer:**  fix rendered object map ([516e8170](https://github.com/tagraha/react-scratch/commit/516e8170b5787540bcd342580f6fb5990d1168d7))
* **lint:**
  *  fix lint warning no-console ([b73e69f4](https://github.com/tagraha/react-scratch/commit/b73e69f4480ef78b61ed3141ccb279f948e5581a))
  *  fix lint warning on configureStore ([c02790c9](https://github.com/tagraha/react-scratch/commit/c02790c9061b8831a5e88981c10574a320daabf8))
  *  fix lint warning ([2ee4b648](https://github.com/tagraha/react-scratch/commit/2ee4b648d66de082f0450f4b6e03c027e0cb3e5a))
  *  fix lint warning ([878a07c0](https://github.com/tagraha/react-scratch/commit/878a07c0b14f3e84d9035efc7312925ad97e8849))
  *  fix eslint rules ([bc0a1f24](https://github.com/tagraha/react-scratch/commit/bc0a1f24df7384ee196f368050305d39344d4818))
  *  fix eslint warning on routes ([4043525b](https://github.com/tagraha/react-scratch/commit/4043525bcc2fc77034ddfcd459c60efaaae152a6))
  *  change lint target ([2a89c3e8](https://github.com/tagraha/react-scratch/commit/2a89c3e83fe7cd64996f8f25c1732c1e54ecd1f9))

##### Other Changes

* **package:**
  *  adding webpack precache ([6625eada](https://github.com/tagraha/react-scratch/commit/6625eada2a3ac9f212d6092ed099fedc4ec5b64a))
  *  adding package for eslint ([497620c9](https://github.com/tagraha/react-scratch/commit/497620c9e9980160ce292d6e5ab9d02e1d085824))
  *  add react-async-component ([46e673c9](https://github.com/tagraha/react-scratch/commit/46e673c98fcd30b0667b406033698d3cdcdc30bf))
* **readme:**
  *  add todos ([a8fb0f6d](https://github.com/tagraha/react-scratch/commit/a8fb0f6d1238bb96984680b27773d21be118ab72))
  *  change caption. feature to technology ([20d9834a](https://github.com/tagraha/react-scratch/commit/20d9834a057cd5bf4f0a7bb1ef83991d5b6949e8))
  *  add eslint to features ([44de6a6e](https://github.com/tagraha/react-scratch/commit/44de6a6eb759b5b7f3a7b41e985bd21d4e498491))
* **scripts:**  better build script ([1cbcdbf3](https://github.com/tagraha/react-scratch/commit/1cbcdbf3196cadf26059bb2acfd38485db80fb66))
* **redux:**  adding combine reducer ([462aff81](https://github.com/tagraha/react-scratch/commit/462aff81ae81f630bae051c61e878201bf784f89))
* **rules:**  update eslint rules ([bff9b805](https://github.com/tagraha/react-scratch/commit/bff9b8054e32272bb3532b5e4c1ceb7ee42f1776))
* **lint:**  update eslint rules ([cd21d1fa](https://github.com/tagraha/react-scratch/commit/cd21d1fa0cacac7e150ef86d2a6db7833ca29455))
* **eslint:**  add eslint config file ([4d085d7d](https://github.com/tagraha/react-scratch/commit/4d085d7d0552d02eb2ae84a85a6e72c4f875714a))

##### Performance Improvements

* **async-component:**  apply async-component bootstraper on server & client side ([f553568a](https://github.com/tagraha/react-scratch/commit/f553568aa5d96bda43f516a277174c4a297acfcd))

##### Refactors

* **file:**  remove unused file ([bccaef53](https://github.com/tagraha/react-scratch/commit/bccaef5306bd9d21d363fb640944f2fff51a7dd4))

### 1.5.0 (2018-03-10)

##### Build System / Dependencies

* **chunkhash:**  apply chunkhash to bundle ([57b3bd10](https://github.com/tagraha/react-scratch/commit/57b3bd105bcbf81627d5a25de768a384f0c74e76))

##### New Features

* **helmet:**
  *  apply react-helmet on client-side render ([3048d6e4](https://github.com/tagraha/react-scratch/commit/3048d6e4b008292d83c9ed60ae52d6b67ba67a7f))
  *  apply react helmet on server-side render ([5935d4b0](https://github.com/tagraha/react-scratch/commit/5935d4b0b3be352819055520754b9cadd496b847))

##### Other Changes

* **package:**
  *  adding react-helmet ([77fabe15](https://github.com/tagraha/react-scratch/commit/77fabe1527c3b095f4dac8bd13f0c0f167346c23))
  *  adding dotenv ([f27f766f](https://github.com/tagraha/react-scratch/commit/f27f766f5e94595c0ca0e3ed8291f4c61989ff35))

#### 1.4.1 (2018-03-09)

##### Build System / Dependencies

* **bundle:**  optimizing bundle size ([a2c5105e](https://github.com/tagraha/react-scratch/commit/a2c5105e222878d14220be33b8fa19d246bba20d))
* **lodash:**  adding babel plugin for lodash ([8687a7cd](https://github.com/tagraha/react-scratch/commit/8687a7cd782c7b75168380dca6c5ecf9f1b28ef3))

##### Other Changes

* **name:**  update project name ([363779fb](https://github.com/tagraha/react-scratch/commit/363779fb18e64d9c70d2992e503163a04c38f9b3))
* **badge:**  add contributor badge ([65fcfb92](https://github.com/tagraha/react-scratch/commit/65fcfb928b5b6050f3710dfc70b0b8952363569a))
* **contrib:**  add .all-contributorsrc file ([a7ab5112](https://github.com/tagraha/react-scratch/commit/a7ab511269f2914859d5a9d0113756d0aeb57a32))
* **package:**
  *  update source-map-support ([16617792](https://github.com/tagraha/react-scratch/commit/16617792c0eb478677013e43f9c808a3d075ad28))
  *  adding recompose ([9fa069ab](https://github.com/tagraha/react-scratch/commit/9fa069ab3a600784ad6ab440acd3db5cf9329132))
  *  adding babel-plugin-lodash ([0ebe2103](https://github.com/tagraha/react-scratch/commit/0ebe2103614bdcf7aa88a05581ba96c7625e418a))
  *  adding lodash ([2c118387](https://github.com/tagraha/react-scratch/commit/2c1183870073d3e69185bd9dbbf4663efed3d4ae))

##### Performance Improvements

* **recompose:**  adding recompose toolbelt ([c22916c9](https://github.com/tagraha/react-scratch/commit/c22916c99eae8611c39ffeb8b8d63aabe0fec6f4))

#### 1.4.1 (2018-03-09)

##### Build System / Dependencies

* **bundle:**  optimizing bundle size ([a2c5105e](https://github.com/tagraha/react-scratch/commit/a2c5105e222878d14220be33b8fa19d246bba20d))
* **lodash:**  adding babel plugin for lodash ([8687a7cd](https://github.com/tagraha/react-scratch/commit/8687a7cd782c7b75168380dca6c5ecf9f1b28ef3))

##### Other Changes

* **package:**
  *  adding recompose ([9fa069ab](https://github.com/tagraha/react-scratch/commit/9fa069ab3a600784ad6ab440acd3db5cf9329132))
  *  adding babel-plugin-lodash ([0ebe2103](https://github.com/tagraha/react-scratch/commit/0ebe2103614bdcf7aa88a05581ba96c7625e418a))
  *  adding lodash ([2c118387](https://github.com/tagraha/react-scratch/commit/2c1183870073d3e69185bd9dbbf4663efed3d4ae))

##### Performance Improvements

* **recompose:**  adding recompose toolbelt ([c22916c9](https://github.com/tagraha/react-scratch/commit/c22916c99eae8611c39ffeb8b8d63aabe0fec6f4))

### 1.4.0 (2018-03-09)

##### Build System / Dependencies

* **hydrate:**  using hydrate from react-dom ([41294a0b](https://github.com/tagraha/react-scratch/commit/41294a0b539bfa25b96f6b3561ed23d56dc0f28c))

##### Other Changes

* **link caption:**  update link caption ([5aa54112](https://github.com/tagraha/react-scratch/commit/5aa54112c8c1618fbbf44c86235a75491aa86ffa))
* **readme:**
  *  fix wrong script command ([4d5cc6ae](https://github.com/tagraha/react-scratch/commit/4d5cc6aea196283a764d523326790415ed6bf263))
  *  update readme ([5f4b5795](https://github.com/tagraha/react-scratch/commit/5f4b5795ee64d106a6975bb7cb1de43fafd76e6e))

##### Performance Improvements

* **hydrate:**  better async data fetching using hydrate ([68d804d4](https://github.com/tagraha/react-scratch/commit/68d804d4c3d371ac6bdf48fe909e2ab1279645e2))

### 1.3.0 (2018-03-07)

##### Other Changes

* **package:**
  *  react-router-dom 4.2.2 ([c23a2f9c](https://github.com/tagraha/react-scratch/commit/c23a2f9cff9e852e8c10add13916423b1196a461))
  *  express@4.16.2 ([a52b047e](https://github.com/tagraha/react-scratch/commit/a52b047e39e18d1dcac91d1580ad5e20593eb119))
  *  react-redux 5.0.7 ([02684ad8](https://github.com/tagraha/react-scratch/commit/02684ad88a34a3a8783bcba5bc56fd64824d1cca))
  *  react & react-dom v16.2.0 ([01b43797](https://github.com/tagraha/react-scratch/commit/01b437978afb313c18d046dac6d9b05da5ef0b88))

### 1.2.0 (2018-03-06)

##### Build System / Dependencies

* **perks:**  upgrading to webpack 4.1.0 ([b04368ba](https://github.com/tagraha/react-scratch/commit/b04368bafccb171bbb7310032eb482d41e04df5f))

### 1.1.0 (2018-03-06)

##### Bug Fixes

* **router:**  404 page always render on every page ([d24febbb](https://github.com/tagraha/react-scratch/commit/d24febbb9c8659409eaec584d877e2167bb26ab9))

##### Other Changes

* **changelog:**  adding changelog generator as dev dependency ([ff640f9a](https://github.com/tagraha/react-scratch/commit/ff640f9ad4f34e20590817425cfb735e7143b879))
* **ignore:**  ignoring build files ([ca5e09dd](https://github.com/tagraha/react-scratch/commit/ca5e09dd5dbae07843a3166be01e292d5f4be335))
* **build:**  delete build files ([34146bc7](https://github.com/tagraha/react-scratch/commit/34146bc7371c4600427087e0eb1876a4628215a2))
* **package:**
  *  update yarn ([e328be12](https://github.com/tagraha/react-scratch/commit/e328be1288d161576af2afc923a7e7b38a49494f))
  *  perks. adding redux logger ([4a792f11](https://github.com/tagraha/react-scratch/commit/4a792f1113bd005f4fd89ed4dca2b6d751fe626d))
* **perks:**  update webpack 4.1.0 ([1c082aff](https://github.com/tagraha/react-scratch/commit/1c082aff3e8e02e193852c61d4c58d30aa4ad21f))

##### Refactors

* **demo:**  change news list demo to github repo list ([626eb760](https://github.com/tagraha/react-scratch/commit/626eb760860f3baa835b926b74bdb72f4e6a9920))
* **unused:**  remove unused import ([b8d8532a](https://github.com/tagraha/react-scratch/commit/b8d8532a43bf00f8e066342361a0f50fa967f5cd))

##### Code Style Changes

* **miligram:**  adding miligram css ([4c0c298b](https://github.com/tagraha/react-scratch/commit/4c0c298b19636f015b6b3e2de18e39b16ed5eb06))

#### 1.0.0 (2018-03-06)

##### Bug Fixes

* **router:**  404 page always render on every page (d24febbb)

##### Other Changes

* **ignore:**  ignoring build files (ca5e09dd)
* **build:**  delete build files (34146bc7)
* **package:**
  *  update yarn (e328be12)
  *  perks. adding redux logger (4a792f11)
* **perks:**  update webpack 4.1.0 (1c082aff)

##### Refactors

* **demo:**  change news list demo to github repo list (626eb760)
* **unused:**  remove unused import (b8d8532a)

##### Code Style Changes

* **miligram:**  adding miligram css (4c0c298b)

