import { ComponentRef, EnvironmentInjector, Injectable, ViewContainerRef, TemplateRef, Type } from '@angular/core';
import { ModalComponent } from './modal.component';
import { ModalOptions } from './modal-options';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  newModalComponent!: ComponentRef<ModalComponent>;
  options!: ModalOptions | undefined;

  constructor(
    private injector: EnvironmentInjector
  ) { }

  open(
    vcrOrComponent: ViewContainerRef,
    content: TemplateRef<Element>,
    options?: ModalOptions
  ): void;

  open<C>(
    vcrOrComponent: ViewContainerRef,
    param2?: TemplateRef<Element>,
    options?: ModalOptions
  ) {
      this.openWithTemplate(vcrOrComponent, param2 as TemplateRef<Element>);
      this.options = options;
  }

  private openWithTemplate(
    vcr: ViewContainerRef,
    content: TemplateRef<Element>
  ) {
    vcr.clear();

    const innerContent = vcr.createEmbeddedView(content);

    this.newModalComponent = vcr.createComponent(ModalComponent, {
      environmentInjector: this.injector,
      projectableNodes: [innerContent.rootNodes],
    });
  }

  close() {
    this.newModalComponent.instance.close();
  }
}
