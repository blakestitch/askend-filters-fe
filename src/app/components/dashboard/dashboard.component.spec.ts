import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DashboardComponent} from './dashboard.component';
import {FilterService} from '../../services/filter.service';
import {FilterResource} from '../../services/filter.resource.module';
import {of} from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let filterService: jasmine.SpyObj<FilterService>;

  beforeEach(async () => {
    filterService = jasmine.createSpyObj('FilterService', ['getAllFilters']);

    await TestBed.configureTestingModule({
      imports: [DashboardComponent],
      providers: [
        {provide: FilterService, useValue: filterService},
      ],
    }).compileComponents();
  });

  function initComponent() {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  it('should display the list of filters', () => {
    // given
    const mockFilters: FilterResource[] = [
      {
        name: 'Filter 1',
        criterias: [
          {type: 'TITLE', comparingCondition: 'comp1', value: 'val1'}
        ]
      }
    ];
    filterService.getAllFilters.and.returnValue(of(mockFilters));

    // when
    initComponent();

    // then
    const listOfFilters = fixture.nativeElement.querySelectorAll('mat-list-item');
    expect(listOfFilters.length).toBe(1);
    let filterOne = listOfFilters[0].querySelector('span').textContent;
    expect(filterOne).toContain('Filter 1');
    let criteriaRowOne = listOfFilters[0].querySelectorAll('tbody tr');
    expect(criteriaRowOne.length).toBe(1);
    let type = criteriaRowOne[0].querySelectorAll('td')[0].textContent;
    expect(type).toContain('TITLE');
    let comparingCondition = criteriaRowOne[0].querySelectorAll('td')[1].textContent;
    expect(comparingCondition).toContain('comp1');
    let value = criteriaRowOne[0].querySelectorAll('td')[2].textContent;
    expect(value).toContain('val1');
  });
});
