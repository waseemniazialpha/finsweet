import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "about", component: AboutComponent },
  { path: "features", component: FeaturesComponent },
  { path: "pricing", component: PricingComponent },
  { path: "faq", component: FaqComponent },
  { path: "blog", component: BlogComponent },
  { path: "contact", component: ContactComponent },
  {
    path: "detail/:id", component: DetailComponent

  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
