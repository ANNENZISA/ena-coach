import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LoginComponent } from './components/login/login.component';
import { RegComponent } from './components/reg/reg.component';


export const routes: Routes = [

    {title: "ENA-Coach | Home", path:'home' , component: HomeComponent},
    {title: "ENA-Coach | About", path:'about' , component: AboutComponent},
    {title: "ENA-Coach | Contact", path:'contact' , component: ContactComponent},
    {title: "ENA-Coach | Ticket", path:'ticket' , component: TicketComponent},
    {title: "ENA-Coach | Gallery", path:'gallery' , component: GalleryComponent},
    {title: "ENA-Coach | Login", path:'login' , component: LoginComponent},
    {title: "ENA-Coach | Reg", path:'reg' , component: RegComponent},

];
