import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FeaturesComponent } from './components/features/features.component';
import { PricingComponent } from './components/pricing/pricing.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path:"features",
        component: FeaturesComponent
    },
    {
        path:"pricing",
        component: PricingComponent
    }
];
