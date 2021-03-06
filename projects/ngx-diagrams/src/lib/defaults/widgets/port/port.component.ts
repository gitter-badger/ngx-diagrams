import { Component, OnInit, Input } from '@angular/core';
import { PortModel } from '../../../models/port.model';

@Component({
	selector: 'ngdx-default-port',
	templateUrl: './port.component.html',
	styleUrls: ['./port.component.scss']
})
export class PortComponent extends PortModel implements OnInit {
	@Input() port: PortModel;
	@Input() key: string;

	constructor() {
		super('port', 'default');
		console.log(this);
	}

	ngOnInit() {}
}
