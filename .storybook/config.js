import { configure } from '@storybook/react';
function loadStories() {
  require('../src/index.css');
  require('../src/components/ClothingItemComponent.story');
  require('../src/components/ClothingItemsComponent.story');
  require('../src/components/catalogpage/LogoHeaderComponent.story');
  require('../src/components/catalogpage/CategoriesComponent.story');
  require('../src/components/NavbarComponent.story');
  require('../src/components/FooterComponent.story');
  require('../src/components/catalogpage/CatalogPageLayout.story');
  require('../src/components/productpage/IndividualItemComponent.story');
  require('../src/components/productpage/ProductPageLayout.story');
  require('../src/components/cartpage/ProductTableComponent.story');
  require('../src/components/cartpage/PriceTableComponent.story');
  require('../src/components/cartpage/CartPageLayout.story');
  require('../src/components/adminpage/ProductFormComponent.story');
  require('../src/components/adminpage/AdminPageLayout.story');
}
configure(loadStories, module);
