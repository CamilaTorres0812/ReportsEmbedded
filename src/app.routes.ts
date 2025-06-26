import { Routes } from '@angular/router';
import { AppLayout } from '@/layout/components/app.layout';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', redirectTo: '/auth/loginKatios', pathMatch: 'full' },
            {
                path: 'admin',
                loadChildren: () => import('@/pages/dashboard/dashboard.routes')
            },
        ]
    },
    { path: 'auth', loadChildren: () => import('@/pages/auth/auth.routes') },
    {
        path: 'landing',
        loadComponent: () => import('@/pages/landing/landing').then((c) => c.Landing)
    },
    {
        path: 'notfound',
        loadComponent: () => import('@/pages/notfound/notfound').then((c) => c.Notfound)
    },
    { path: '**', redirectTo: '/notfound' }
];
