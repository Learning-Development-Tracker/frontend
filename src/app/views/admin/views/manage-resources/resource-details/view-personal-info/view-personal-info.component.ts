import { Component } from '@angular/core';
import { Options } from '../../../../../../shared/components/dropdown/options';
import { DropdownComponent } from '../../../../../../shared/components/dropdown/dropdown.component';

@Component({
  selector: 'app-view-personal-info',
  standalone: true,
  imports: [DropdownComponent],
  templateUrl: './view-personal-info.component.html',
  styleUrl: './view-personal-info.component.css'
})
export class ViewPersonalInfoComponent {
  selectedValue: string = ''
  public optionsList1: Options[] = [
    {
      value:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. \
        It has survived not only five centuries, but also the leap into electronic typesetting, \
        remaining essentially unchanged. It was popularised in the 1960s with the release of \
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing \
        software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      value:
        "It is a long established fact that a reader will be distracted by the readable \
        content of a page when looking at its layout. The point of using Lorem Ipsum is \
        that it has a more-or-less normal distribution of letters, as opposed to using \
        'Content here, content here', making it look like readable English. \
        Many desktop publishing packages and web page editors now use Lorem Ipsum as their \
        default model text, and a search for 'lorem ipsum' will uncover many web sites \
        still in their infancy. Various versions have evolved over the years, \
        sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    { value: 'Hello World' },
    { value: 'Apple' },
    { value: 'Orange' },
  ];
  onSelectDropdown (evt: string) {
    console.log(evt)
    this.selectedValue = evt;
  }
}
