import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{
		path: 'home',
		loadComponent: () =>
			import('./components/home/home.component').then(
				mod => mod.HomeComponent
			),
	},
	{
		path: 'about',
		loadComponent: () =>
			import('./components/about/about.component').then(
				mod => mod.AboutComponent
			),
	},
	{
		path: 'contact',
		loadComponent: () =>
			import('./components/contact/contact.component').then(
				mod => mod.ContactComponent
			),
	},
	{
		path: 'ticket',
		loadComponent: () =>
			import('./components/ticket/ticket.component').then(
				mod => mod.TicketComponent
			),
	},
	{
		path: 'gallery',
		loadComponent: () =>
			import('./components/gallery/gallery.component').then(
				mod => mod.GalleryComponent
			),
	},
	{
		path: 'login',
		loadComponent: () =>
			import('./components/login/login.component').then(
				mod => mod.LoginComponent
			),
	},
	{
		path: 'reg',
		loadComponent: () =>
			import('./components/reg/reg.component').then(
				mod => mod.RegComponent
			),
	},
];

@NgModule({
	imports: [CommonModule, RouterModule.forRoot(routes)],
	exports: [RouterModule],
	declarations: [],
})
export class AppRoutingModule {}
