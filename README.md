# React Ribbon Menu

Ribbon Menu component with React

<img src="https://github.com/jesusjames/react-ribbonmenu-js/blob/master/ribbonmenu.png?raw=true" alt="ribbonmenu.png">


### Installing

Using npm

```
npm install --save react-ribbonmenu-js react react-dom
```

### Example

```javascript
import React, {Component} from 'react';
import {RibbonMenu, RibbonTabs, TabItem, RibbonContent, RibbonSection, RibbonGroup,
    RibbonButton, Icon, Caption, DividerGroup, RibbonToggleGroup} from 'react-ribbonmenu-js';

export class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            activeTabRibbon = 'section-one'
        }
    }

    toggleTapRibbon = (tabId) => {
        if(this.state.activeTabRibbon !== tabId) this.setState({activeTabRibbon: tabId});
    }

    render(){
        return(
            <RibbonMenu style={{marginTop: -23}}>
                <RibbonTabs>
                    <TabItem text='Archivo' static/>
                    <TabItem text='Herramientas'
                        active={this.state.activeTabRibbon === 'section-one'}
                        onClick={() => { this.toggleTapRibbon('section-one'); }}/>
                    <TabItem text='Other' active={this.state.activeTabRibbon === 'section-two'}
                        onClick={() => { this.toggleTapRibbon('section-two'); }}/>
                    <TabItem text='Disabled' disabled/>
                </RibbonTabs>
                <RibbonContent activeTab={this.state.activeTabRibbon}>
                    <RibbonSection tabId="section-one" style={{borderBottom: 'none'}}>
                        <RibbonGroup text="Vistas">
                            <RibbonButton onClick={this.state.layoutSeries[0].stack.imageIds.length > 0 ? this.handleOpenSideBar: null}
                                className={classNames({'active': this.state.openSidebar})}>
                                <Icon image={false} className="indira-icono-agregar-serie" style={{fontSize: 30}}/>
                                <Caption text={i18next.t('herramientas.series')}/>
                            </RibbonButton>
                            <RibbonButton onClick={this.handleOpenLayout} id={this.state.layout.id}
                                className={classNames({'active': this.state.layout.active})}>
                                <Icon image={false} className="indira-icono-ventanas" style={{fontSize: 30}}/>
                                <Caption text={i18next.t('controls.nombre.layout')}/>
                            </RibbonButton>
                            <DividerGroup/>
                            <RibbonButton>
                                <Icon image={false} className="indira-lungs" style={{fontSize: 30}}/>
                                <Caption text={i18next.t('ia')}/>
                            </RibbonButton>
                        </RibbonGroup>
                        <RibbonGroup text="Herramientas">
                            <RibbonButton onClick={this.state.layoutSeries[0].stack.imageIds.length > 0 ? this.handleOpenSideBar: null}
                                className={classNames({'active': this.state.openSidebar})}>
                                <Icon image={false} className="indira-icono-agregar-serie" style={{fontSize: 30}}/>
                                <Caption text="Other"/>
                            </RibbonButton>
                            <DividerGroup/>
                            <div className="d-flex flex-column">
                                <RibbonControlsCategorys clickButton={this.clickActionCategory}
                                    categorys={this.state.categorys}/>
                            </div>

                            <RibbonToggleGroup style={{width: this.state.widthGroupControls}}>
                                <RibbonControlsCore clickButton={this.clickActionControl}
                                    controls={this.state.controls}
                                    categorys={this.state.categorys}/>
                            </RibbonToggleGroup>
                        </RibbonGroup>
                    </RibbonSection>
                    <RibbonSection tabId="section-two">
                        <h1 className="text-white">Section-two</h1>
                    </RibbonSection>
                </RibbonContent>
            </RibbonMenu>
        )
    }
}

export default App;
```

## Built With

* [React](https://es.reactjs.org/) - The web framework used

## Authors

* **Jesus Santiago Tovar** - *Initial work* - [jesusjames](https://github.com/jesusjames)

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc