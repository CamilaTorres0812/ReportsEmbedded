import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { AuthService } from 'src/services/auth.service';

export const tokenGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const idKatiosUrl = route.paramMap.get('idKatios');
  const tokenUrl = route.paramMap.get('token');
  const url = state.url;
  if(idKatiosUrl && tokenUrl){
    return authService.loginWithToken(idKatiosUrl,tokenUrl).pipe(
      map(() => true),
      catchError(() => {
        sessionStorage.removeItem('authType');
        router.navigate(['/auth/loginKatios']);
        return of(false);
      })
    )
  }
  return of(true); 
};
