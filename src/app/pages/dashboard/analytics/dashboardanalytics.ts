import { Component } from '@angular/core';
import { MonthlyComparisonWidget } from '@/pages/dashboard/analytics/components/monthlycomparisonwidget';
import { InsightsWidget } from '@/pages/dashboard/analytics/components/insightswidget';
import { StatsWidget } from '@/pages/dashboard/analytics/components/statswidget';
import { StoresWidget } from '@/pages/dashboard/analytics/components/storeswidget';
import { TopSearchesWidget } from '@/pages/dashboard/analytics/components/topsearcheswidget';
import { AnalyticsTableWidget } from '@/pages/dashboard/analytics/components/analyticstablewidget';
import { ExpensesWidget } from '@/pages/dashboard/analytics/components/expenseswidget';
import { RatingsWidget } from '@/pages/dashboard/analytics/components/ratingswidget';

@Component({
    selector: 'app-dashboard-analytics',
    standalone: true,
    imports: [MonthlyComparisonWidget, InsightsWidget, StatsWidget, StoresWidget, TopSearchesWidget, AnalyticsTableWidget, ExpensesWidget, RatingsWidget],
    template: `<div class="text-center mt-5">
  <div class="flex flex-column align-items-center justify-content-center gap-4 mx-auto max-w-30rem">
    <div class="flex align-items-center justify-content-center bg-gray-200 border-circle" style="height: 5rem; width: 5rem;">
      <i class="pi pi-chart-bar text-gray-600" style="font-size: 2.5rem;"></i>
    </div>
    <div class="flex flex-column gap-2">
      <h3 class="text-xl font-semibold">Select a Dashboard</h3>
      <p class="text-sm text-gray-500">
        Choose a dashboard from the side menu to view your Power BI data.
      </p>
    </div>
  </div>
</div>
`
})
export class DashboardAnalytics {}
