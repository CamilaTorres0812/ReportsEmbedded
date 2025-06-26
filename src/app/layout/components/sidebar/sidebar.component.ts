import { Component, computed, ElementRef, inject, OnDestroy, ViewChild } from '@angular/core';
import { AppMenuProfile } from '@/layout/components/app.menuprofile';
import { CommonModule } from '@angular/common';
import { LayoutService } from '@/layout/service/layout.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: '[app-sidebar]',
  standalone: true,
  imports: [AppMenuProfile, CommonModule, MenuComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  el = inject(ElementRef);
  
  layoutService = inject(LayoutService);

  @ViewChild( MenuComponent ) appMenu!:  MenuComponent ;

  @ViewChild('menuContainer') menuContainer!: ElementRef;

  overlayMenuActive = computed(() => this.layoutService.layoutState().overlayMenuActive);

  menuProfilePosition = computed(() => this.layoutService.layoutConfig().menuProfilePosition);

  anchored = computed(() => this.layoutService.layoutState().anchored);

  timeout: any;

  resetOverlay() {
      if (this.overlayMenuActive()) {
          this.layoutService.layoutState.update((val) => ({ ...val, overlayMenuActive: false }));
      }
  }

  onMouseEnter() {
      if (!this.anchored()) {
          if (this.timeout) {
              clearTimeout(this.timeout);
              this.timeout = null;
          }
          this.layoutService.layoutState.update((val) => ({ ...val, sidebarActive: true }));
      }
  }

  onMouseLeave() {
      if (!this.anchored()) {
          if (!this.timeout) {
              this.timeout = setTimeout(() => this.layoutService.layoutState.update((val) => ({ ...val, sidebarActive: false })), 300);
          }
      }
  }

  anchor() {
      this.layoutService.layoutState.update((val) => ({ ...val, anchored: !val.anchored }));
  }

  ngOnDestroy() {
      this.resetOverlay();
  }
}
