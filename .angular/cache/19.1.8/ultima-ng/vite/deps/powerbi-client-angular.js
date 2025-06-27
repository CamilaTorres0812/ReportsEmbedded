import {
  require_powerbi
} from "./chunk-5CF2AKLF.js";
import {
  Component,
  Input,
  NgModule,
  ViewChild,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵviewQuery
} from "./chunk-L6742YF5.js";
import "./chunk-PEBH6BBU.js";
import "./chunk-WPM5VTLQ.js";
import "./chunk-4S3KYZTJ.js";
import {
  __toESM
} from "./chunk-GZBIO5IJ.js";

// node_modules/powerbi-client-angular/fesm2022/powerbi-client-angular.mjs
var import_powerbi_client = __toESM(require_powerbi(), 1);
var _c0 = ["reportContainer"];
var _c1 = ["embedConfig", ""];
var _c2 = ["dashboardContainer"];
var _c3 = ["tileContainer"];
var _c4 = ["paginatedReportContainer"];
var _c5 = ["visualContainer"];
var _c6 = ["qnaContainer"];
var _c7 = ["createReportContainer"];
var stringifyMap = (map) => {
  if (!map) {
    return "";
  }
  const mapEntries = Array.from(map);
  return JSON.stringify(mapEntries.map((mapEntry) => (
    // Convert event handler method to a string containing its source code for comparison
    [mapEntry[0], mapEntry[1] ? mapEntry[1].toString() : ""]
  )));
};
var isEmbedSetupValid = (containerRef, embedConfig) => {
  return !!containerRef.nativeElement && !!embedConfig.accessToken && !!embedConfig.embedUrl;
};
var sdkType = "powerbi-client-angular";
var sdkWrapperVersion = "5.0.0";
var PowerBIEmbedComponent = class _PowerBIEmbedComponent {
  constructor() {
    this.prevEventHandlerMapString = "";
  }
  ngOnInit() {
    if (this.service) {
      this.powerbi = this.service;
    } else {
      if (!_PowerBIEmbedComponent._powerbi) {
        _PowerBIEmbedComponent._powerbi = new import_powerbi_client.service.Service(import_powerbi_client.factories.hpmFactory, import_powerbi_client.factories.wpmpFactory, import_powerbi_client.factories.routerFactory);
      }
      this.powerbi = _PowerBIEmbedComponent._powerbi;
    }
    this.powerbi.setSdkInfo(sdkType, sdkWrapperVersion);
  }
  /**
   * Sets all event handlers from the input on the embedded entity
   *
   * @param embed Embedded object
   * @param eventHandlerMap Array of event handlers to be set on embedded entity
   * @returns void
   */
  setEventHandlers(embed, eventHandlerMap) {
    const eventHandlerMapString = stringifyMap(eventHandlerMap);
    if (this.prevEventHandlerMapString === eventHandlerMapString) {
      return;
    }
    this.prevEventHandlerMapString = eventHandlerMapString;
    eventHandlerMap.forEach((eventHandlerMethod, eventName) => {
      embed.off(eventName);
      if (eventHandlerMethod) {
        embed.on(eventName, (event) => {
          eventHandlerMethod(event, embed);
        });
      }
    });
  }
  static {
    this.ɵfac = function PowerBIEmbedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PowerBIEmbedComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PowerBIEmbedComponent,
      selectors: [["powerbi-embed"]],
      inputs: {
        cssClassName: "cssClassName",
        service: "service"
      },
      standalone: false,
      decls: 0,
      vars: 0,
      template: function PowerBIEmbedComponent_Template(rf, ctx) {
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PowerBIEmbedComponent, [{
    type: Component,
    args: [{
      selector: "powerbi-embed",
      template: ""
    }]
  }], null, {
    cssClassName: [{
      type: Input
    }],
    service: [{
      type: Input
    }]
  });
})();
var PowerBIReportEmbedComponent = class _PowerBIReportEmbedComponent extends PowerBIEmbedComponent {
  // Getter for this._embed
  get embed() {
    return this._embed;
  }
  // Setter for this._embed
  set embed(newEmbedInstance) {
    this._embed = newEmbedInstance;
  }
  constructor() {
    super();
    this.phasedEmbedding = false;
  }
  // Returns embed object to calling function
  getReport() {
    return this._embed;
  }
  ngOnInit() {
    super.ngOnInit();
  }
  ngOnChanges(changes) {
    if (changes.embedConfig) {
      if (changes.embedConfig.isFirstChange()) {
        return;
      }
      const prevEmbedConfig = changes.embedConfig.previousValue;
      const currentEmbedConfig = changes.embedConfig.currentValue;
      if (JSON.stringify(prevEmbedConfig) !== JSON.stringify(currentEmbedConfig)) {
        this.embedReport();
      }
    }
    if (this.eventHandlers && this.embed) {
      super.setEventHandlers(this.embed, this.eventHandlers);
    }
  }
  ngAfterViewInit() {
    if (this.containerRef.nativeElement) {
      if (this.embedConfig.accessToken && this.embedConfig.embedUrl) {
        this.embedReport();
      } else {
        this.embed = this.powerbi.bootstrap(this.containerRef.nativeElement, this.embedConfig);
      }
    }
    if (this.eventHandlers && this.embed) {
      super.setEventHandlers(this.embed, this.eventHandlers);
    }
  }
  /**
   * Embed or load the PowerBI Report based on phasedEmbedding flag
   *
   * @returns void
   */
  embedReport() {
    if (!isEmbedSetupValid(this.containerRef, this.embedConfig)) {
      return;
    }
    if (this.phasedEmbedding) {
      this.embed = this.powerbi.load(this.containerRef.nativeElement, this.embedConfig);
    } else {
      this.embed = this.powerbi.embed(this.containerRef.nativeElement, this.embedConfig);
    }
  }
  static {
    this.ɵfac = function PowerBIReportEmbedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PowerBIReportEmbedComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PowerBIReportEmbedComponent,
      selectors: [["powerbi-report", "embedConfig", ""]],
      viewQuery: function PowerBIReportEmbedComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerRef = _t.first);
        }
      },
      inputs: {
        embedConfig: "embedConfig",
        phasedEmbedding: "phasedEmbedding",
        eventHandlers: "eventHandlers"
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
      attrs: _c1,
      decls: 2,
      vars: 3,
      consts: [["reportContainer", ""]],
      template: function PowerBIReportEmbedComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "div", null, 0);
        }
        if (rf & 2) {
          ɵɵclassMap(ctx.cssClassName);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PowerBIReportEmbedComponent, [{
    type: Component,
    args: [{
      selector: "powerbi-report[embedConfig]",
      template: "<div class={{cssClassName}} #reportContainer></div>"
    }]
  }], () => [], {
    embedConfig: [{
      type: Input
    }],
    phasedEmbedding: [{
      type: Input
    }],
    eventHandlers: [{
      type: Input
    }],
    containerRef: [{
      type: ViewChild,
      args: ["reportContainer"]
    }]
  });
})();
var PowerBIDashboardEmbedComponent = class _PowerBIDashboardEmbedComponent extends PowerBIEmbedComponent {
  // Getter for this._embed
  get embed() {
    return this._embed;
  }
  // Setter for this._embed
  set embed(newEmbedInstance) {
    this._embed = newEmbedInstance;
  }
  constructor() {
    super();
  }
  // Returns embed object to calling function
  getDashboard() {
    return this.embed;
  }
  ngOnInit() {
    super.ngOnInit();
  }
  ngOnChanges(changes) {
    if (changes.embedConfig) {
      if (changes.embedConfig.isFirstChange()) {
        return;
      }
      const prevEmbedConfig = changes.embedConfig.previousValue;
      const currentEmbedConfig = changes.embedConfig.currentValue;
      if (JSON.stringify(prevEmbedConfig) !== JSON.stringify(currentEmbedConfig)) {
        this.embedDashboard();
      }
    }
    if (this.eventHandlers && this.embed) {
      super.setEventHandlers(this.embed, this.eventHandlers);
    }
  }
  ngAfterViewInit() {
    if (this.containerRef.nativeElement) {
      if (this.embedConfig.accessToken && this.embedConfig.embedUrl) {
        this.embedDashboard();
      } else {
        this.embed = this.powerbi.bootstrap(this.containerRef.nativeElement, this.embedConfig);
      }
    }
    if (this.eventHandlers && this.embed) {
      super.setEventHandlers(this.embed, this.eventHandlers);
    }
  }
  /**
   * Embed the PowerBI Dashboard
   *
   * @returns void
   */
  embedDashboard() {
    if (!isEmbedSetupValid(this.containerRef, this.embedConfig)) {
      return;
    }
    this.embed = this.powerbi.embed(this.containerRef.nativeElement, this.embedConfig);
  }
  static {
    this.ɵfac = function PowerBIDashboardEmbedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PowerBIDashboardEmbedComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PowerBIDashboardEmbedComponent,
      selectors: [["powerbi-dashboard", "embedConfig", ""]],
      viewQuery: function PowerBIDashboardEmbedComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c2, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerRef = _t.first);
        }
      },
      inputs: {
        embedConfig: "embedConfig",
        eventHandlers: "eventHandlers"
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
      attrs: _c1,
      decls: 2,
      vars: 3,
      consts: [["dashboardContainer", ""]],
      template: function PowerBIDashboardEmbedComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "div", null, 0);
        }
        if (rf & 2) {
          ɵɵclassMap(ctx.cssClassName);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PowerBIDashboardEmbedComponent, [{
    type: Component,
    args: [{
      selector: "powerbi-dashboard[embedConfig]",
      template: "<div class={{cssClassName}} #dashboardContainer></div>"
    }]
  }], () => [], {
    embedConfig: [{
      type: Input
    }],
    eventHandlers: [{
      type: Input
    }],
    containerRef: [{
      type: ViewChild,
      args: ["dashboardContainer"]
    }]
  });
})();
var PowerBITileEmbedComponent = class _PowerBITileEmbedComponent extends PowerBIEmbedComponent {
  // Getter for this._embed
  get embed() {
    return this._embed;
  }
  // Setter for this._embed
  set embed(newEmbedInstance) {
    this._embed = newEmbedInstance;
  }
  constructor() {
    super();
  }
  // Returns embed object to calling function
  getTile() {
    return this._embed;
  }
  ngOnInit() {
    super.ngOnInit();
  }
  ngOnChanges(changes) {
    if (changes.embedConfig) {
      if (changes.embedConfig.isFirstChange()) {
        return;
      }
      const prevEmbedConfig = changes.embedConfig.previousValue;
      const currentEmbedConfig = changes.embedConfig.currentValue;
      if (JSON.stringify(prevEmbedConfig) !== JSON.stringify(currentEmbedConfig)) {
        this.embedTile();
      }
    }
    if (this.eventHandlers && this.embed) {
      super.setEventHandlers(this.embed, this.eventHandlers);
    }
  }
  ngAfterViewInit() {
    if (this.containerRef.nativeElement) {
      if (this.embedConfig.accessToken && this.embedConfig.embedUrl) {
        this.embedTile();
      } else {
        this.embed = this.powerbi.bootstrap(this.containerRef.nativeElement, this.embedConfig);
      }
    }
    if (this.eventHandlers && this.embed) {
      super.setEventHandlers(this.embed, this.eventHandlers);
    }
  }
  /**
   * Embed the PowerBI Tile
   *
   * @returns void
   */
  embedTile() {
    if (!this.containerRef.nativeElement || !this.embedConfig.accessToken || !this.embedConfig.embedUrl) {
      return;
    }
    this.embed = this.powerbi.embed(this.containerRef.nativeElement, this.embedConfig);
  }
  static {
    this.ɵfac = function PowerBITileEmbedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PowerBITileEmbedComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PowerBITileEmbedComponent,
      selectors: [["powerbi-tile", "embedConfig", ""]],
      viewQuery: function PowerBITileEmbedComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerRef = _t.first);
        }
      },
      inputs: {
        embedConfig: "embedConfig",
        eventHandlers: "eventHandlers"
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
      attrs: _c1,
      decls: 2,
      vars: 3,
      consts: [["tileContainer", ""]],
      template: function PowerBITileEmbedComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "div", null, 0);
        }
        if (rf & 2) {
          ɵɵclassMap(ctx.cssClassName);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PowerBITileEmbedComponent, [{
    type: Component,
    args: [{
      selector: "powerbi-tile[embedConfig]",
      template: "<div class={{cssClassName}} #tileContainer></div>"
    }]
  }], () => [], {
    embedConfig: [{
      type: Input
    }],
    eventHandlers: [{
      type: Input
    }],
    containerRef: [{
      type: ViewChild,
      args: ["tileContainer"]
    }]
  });
})();
var PowerBIPaginatedReportEmbedComponent = class _PowerBIPaginatedReportEmbedComponent extends PowerBIEmbedComponent {
  // Getter for this._embed
  get embed() {
    return this._embed;
  }
  // Setter for this._embed
  set embed(newEmbedInstance) {
    this._embed = newEmbedInstance;
  }
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
  ngOnChanges(changes) {
    if (changes.embedConfig) {
      if (changes.embedConfig.isFirstChange()) {
        return;
      }
      const prevEmbedConfig = changes.embedConfig.previousValue;
      const currentEmbedConfig = changes.embedConfig.currentValue;
      if (JSON.stringify(prevEmbedConfig) !== JSON.stringify(currentEmbedConfig)) {
        this.embedPaginatedReport();
      }
    }
  }
  ngAfterViewInit() {
    if (this.containerRef.nativeElement) {
      this.embedPaginatedReport();
    }
  }
  /**
   * Embed the PowerBI Paginated report
   *
   * @returns void
   */
  embedPaginatedReport() {
    if (!isEmbedSetupValid(this.containerRef, this.embedConfig)) {
      return;
    }
    this.embed = this.powerbi.embed(this.containerRef.nativeElement, this.embedConfig);
  }
  static {
    this.ɵfac = function PowerBIPaginatedReportEmbedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PowerBIPaginatedReportEmbedComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PowerBIPaginatedReportEmbedComponent,
      selectors: [["powerbi-paginated-report", "embedConfig", ""]],
      viewQuery: function PowerBIPaginatedReportEmbedComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c4, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerRef = _t.first);
        }
      },
      inputs: {
        embedConfig: "embedConfig"
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
      attrs: _c1,
      decls: 2,
      vars: 3,
      consts: [["paginatedReportContainer", ""]],
      template: function PowerBIPaginatedReportEmbedComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "div", null, 0);
        }
        if (rf & 2) {
          ɵɵclassMap(ctx.cssClassName);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PowerBIPaginatedReportEmbedComponent, [{
    type: Component,
    args: [{
      selector: "powerbi-paginated-report[embedConfig]",
      template: "<div class={{cssClassName}} #paginatedReportContainer></div>"
    }]
  }], () => [], {
    embedConfig: [{
      type: Input
    }],
    containerRef: [{
      type: ViewChild,
      args: ["paginatedReportContainer"]
    }]
  });
})();
var PowerBIVisualEmbedComponent = class _PowerBIVisualEmbedComponent extends PowerBIEmbedComponent {
  // Getter for this._embed
  get embed() {
    return this._embed;
  }
  // Setter for this._embed
  set embed(newEmbedInstance) {
    this._embed = newEmbedInstance;
  }
  constructor() {
    super();
  }
  // Returns embed object to calling function
  getVisual() {
    return this._embed;
  }
  ngOnInit() {
    super.ngOnInit();
  }
  ngOnChanges(changes) {
    if (changes.embedConfig) {
      if (changes.embedConfig.isFirstChange()) {
        return;
      }
      const prevEmbedConfig = changes.embedConfig.previousValue;
      const currentEmbedConfig = changes.embedConfig.currentValue;
      if (JSON.stringify(prevEmbedConfig) !== JSON.stringify(currentEmbedConfig)) {
        this.embedVisual();
      }
    }
    if (this.eventHandlers && this.embed) {
      super.setEventHandlers(this.embed, this.eventHandlers);
    }
  }
  ngAfterViewInit() {
    if (this.containerRef.nativeElement) {
      if (this.embedConfig.accessToken && this.embedConfig.embedUrl) {
        this.embedVisual();
      } else {
        this.embed = this.powerbi.bootstrap(this.containerRef.nativeElement, this.embedConfig);
      }
    }
    if (this.eventHandlers && this.embed) {
      super.setEventHandlers(this.embed, this.eventHandlers);
    }
  }
  /**
   * Embed the PowerBI Visual
   *
   * @returns void
   */
  embedVisual() {
    if (!isEmbedSetupValid(this.containerRef, this.embedConfig)) {
      return;
    }
    this.embed = this.powerbi.embed(this.containerRef.nativeElement, this.embedConfig);
  }
  static {
    this.ɵfac = function PowerBIVisualEmbedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PowerBIVisualEmbedComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PowerBIVisualEmbedComponent,
      selectors: [["powerbi-visual", "embedConfig", ""]],
      viewQuery: function PowerBIVisualEmbedComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c5, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerRef = _t.first);
        }
      },
      inputs: {
        embedConfig: "embedConfig",
        eventHandlers: "eventHandlers"
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
      attrs: _c1,
      decls: 2,
      vars: 3,
      consts: [["visualContainer", ""]],
      template: function PowerBIVisualEmbedComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "div", null, 0);
        }
        if (rf & 2) {
          ɵɵclassMap(ctx.cssClassName);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PowerBIVisualEmbedComponent, [{
    type: Component,
    args: [{
      selector: "powerbi-visual[embedConfig]",
      template: "<div class={{cssClassName}} #visualContainer></div>"
    }]
  }], () => [], {
    embedConfig: [{
      type: Input
    }],
    eventHandlers: [{
      type: Input
    }],
    containerRef: [{
      type: ViewChild,
      args: ["visualContainer"]
    }]
  });
})();
var PowerBIQnaEmbedComponent = class _PowerBIQnaEmbedComponent extends PowerBIEmbedComponent {
  // Getter for this._embed
  get embed() {
    return this._embed;
  }
  // Setter for this._embed
  set embed(newEmbedInstance) {
    this._embed = newEmbedInstance;
  }
  constructor() {
    super();
  }
  // Returns embed object to calling function
  getQna() {
    return this._embed;
  }
  ngOnInit() {
    super.ngOnInit();
  }
  ngOnChanges(changes) {
    if (changes.embedConfig) {
      if (changes.embedConfig.isFirstChange()) {
        return;
      }
      const prevEmbedConfig = changes.embedConfig.previousValue;
      const currentEmbedConfig = changes.embedConfig.currentValue;
      if (JSON.stringify(prevEmbedConfig) !== JSON.stringify(currentEmbedConfig)) {
        this.embedQnaVisual();
      }
    }
    if (this.eventHandlers && this.embed) {
      super.setEventHandlers(this.embed, this.eventHandlers);
    }
  }
  ngAfterViewInit() {
    if (this.containerRef.nativeElement) {
      if (this.embedConfig.accessToken && this.embedConfig.embedUrl) {
        this.embedQnaVisual();
      } else {
        this.embed = this.powerbi.bootstrap(this.containerRef.nativeElement, this.embedConfig);
      }
    }
    if (this.eventHandlers && this.embed) {
      super.setEventHandlers(this.embed, this.eventHandlers);
    }
  }
  /**
   * Embed the PowerBI QnA Visual
   *
   * @returns void
   */
  embedQnaVisual() {
    if (!isEmbedSetupValid(this.containerRef, this.embedConfig)) {
      return;
    }
    this.embed = this.powerbi.embed(this.containerRef.nativeElement, this.embedConfig);
  }
  static {
    this.ɵfac = function PowerBIQnaEmbedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PowerBIQnaEmbedComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PowerBIQnaEmbedComponent,
      selectors: [["powerbi-qna", "embedConfig", ""]],
      viewQuery: function PowerBIQnaEmbedComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c6, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerRef = _t.first);
        }
      },
      inputs: {
        embedConfig: "embedConfig",
        eventHandlers: "eventHandlers"
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
      attrs: _c1,
      decls: 2,
      vars: 3,
      consts: [["qnaContainer", ""]],
      template: function PowerBIQnaEmbedComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "div", null, 0);
        }
        if (rf & 2) {
          ɵɵclassMap(ctx.cssClassName);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PowerBIQnaEmbedComponent, [{
    type: Component,
    args: [{
      selector: "powerbi-qna[embedConfig]",
      template: "<div class={{cssClassName}} #qnaContainer></div>"
    }]
  }], () => [], {
    embedConfig: [{
      type: Input
    }],
    eventHandlers: [{
      type: Input
    }],
    containerRef: [{
      type: ViewChild,
      args: ["qnaContainer"]
    }]
  });
})();
var PowerBICreateReportEmbedComponent = class _PowerBICreateReportEmbedComponent extends PowerBIEmbedComponent {
  // Getter for this._embed
  get embed() {
    return this._embed;
  }
  // Setter for this._embed
  set embed(newEmbedInstance) {
    this._embed = newEmbedInstance;
  }
  constructor() {
    super();
  }
  // Returns embed object to calling function
  getCreateObject() {
    return this._embed;
  }
  ngOnInit() {
    super.ngOnInit();
  }
  ngOnChanges(changes) {
    if (changes.embedConfig) {
      if (changes.embedConfig.isFirstChange()) {
        return;
      }
      const prevEmbedConfig = changes.embedConfig.previousValue;
      const currentEmbedConfig = changes.embedConfig.currentValue;
      if (JSON.stringify(prevEmbedConfig) !== JSON.stringify(currentEmbedConfig)) {
        this.embedCreateReport();
      }
    }
    if (this.eventHandlers && this.embed) {
      super.setEventHandlers(this.embed, this.eventHandlers);
    }
  }
  ngAfterViewInit() {
    this.embedCreateReport();
    if (this.eventHandlers && this.embed) {
      super.setEventHandlers(this.embed, this.eventHandlers);
    }
  }
  /**
   * Embed the PowerBI Create report
   *
   * @returns void
   */
  embedCreateReport() {
    if (!isEmbedSetupValid(this.containerRef, this.embedConfig)) {
      return;
    }
    this.embed = this.powerbi.createReport(this.containerRef.nativeElement, this.embedConfig);
  }
  static {
    this.ɵfac = function PowerBICreateReportEmbedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PowerBICreateReportEmbedComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PowerBICreateReportEmbedComponent,
      selectors: [["powerbi-create-report", "embedConfig", ""]],
      viewQuery: function PowerBICreateReportEmbedComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c7, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerRef = _t.first);
        }
      },
      inputs: {
        embedConfig: "embedConfig",
        eventHandlers: "eventHandlers"
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
      attrs: _c1,
      decls: 2,
      vars: 3,
      consts: [["createReportContainer", ""]],
      template: function PowerBICreateReportEmbedComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "div", null, 0);
        }
        if (rf & 2) {
          ɵɵclassMap(ctx.cssClassName);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PowerBICreateReportEmbedComponent, [{
    type: Component,
    args: [{
      selector: "powerbi-create-report[embedConfig]",
      template: "<div class={{cssClassName}} #createReportContainer></div>"
    }]
  }], () => [], {
    embedConfig: [{
      type: Input
    }],
    eventHandlers: [{
      type: Input
    }],
    containerRef: [{
      type: ViewChild,
      args: ["createReportContainer"]
    }]
  });
})();
var PowerBIEmbedModule = class _PowerBIEmbedModule {
  static {
    this.ɵfac = function PowerBIEmbedModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PowerBIEmbedModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PowerBIEmbedModule,
      declarations: [PowerBIEmbedComponent, PowerBIDashboardEmbedComponent, PowerBIPaginatedReportEmbedComponent, PowerBIQnaEmbedComponent, PowerBIReportEmbedComponent, PowerBITileEmbedComponent, PowerBIVisualEmbedComponent, PowerBICreateReportEmbedComponent],
      exports: [PowerBIDashboardEmbedComponent, PowerBIPaginatedReportEmbedComponent, PowerBIQnaEmbedComponent, PowerBIReportEmbedComponent, PowerBITileEmbedComponent, PowerBIVisualEmbedComponent, PowerBICreateReportEmbedComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PowerBIEmbedModule, [{
    type: NgModule,
    args: [{
      declarations: [PowerBIEmbedComponent, PowerBIDashboardEmbedComponent, PowerBIPaginatedReportEmbedComponent, PowerBIQnaEmbedComponent, PowerBIReportEmbedComponent, PowerBITileEmbedComponent, PowerBIVisualEmbedComponent, PowerBICreateReportEmbedComponent],
      imports: [],
      exports: [PowerBIDashboardEmbedComponent, PowerBIPaginatedReportEmbedComponent, PowerBIQnaEmbedComponent, PowerBIReportEmbedComponent, PowerBITileEmbedComponent, PowerBIVisualEmbedComponent, PowerBICreateReportEmbedComponent]
    }]
  }], null, null);
})();
export {
  PowerBICreateReportEmbedComponent,
  PowerBIDashboardEmbedComponent,
  PowerBIEmbedModule,
  PowerBIPaginatedReportEmbedComponent,
  PowerBIQnaEmbedComponent,
  PowerBIReportEmbedComponent,
  PowerBITileEmbedComponent,
  PowerBIVisualEmbedComponent
};
//# sourceMappingURL=powerbi-client-angular.js.map
