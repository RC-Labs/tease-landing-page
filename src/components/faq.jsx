import { Component } from 'react';
import { faqData } from '../data/faq-data';
import '../assets/scss/faq.scss';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import { ReactComponent as DdArrow } from '../assets/images/dropdown-arrow.svg';


export class FAQ extends Component {
  render() {
    return (
      <section className='faq' id='faq'>
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <Accordion allowZeroExpanded={true}>
            {accordionList}
          </Accordion>
        </div>
      </section>
    )
  }
}


class AccordionItemPropped extends Component {
  render() {
    return (
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton><span className='question'>{this.props.question}</span><DdArrow className='arrow' /> </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>{this.props.answer}</p>
        </AccordionItemPanel>
      </AccordionItem>
    )
  }
}

const accordionList = faqData.map((element, index) =>
  <AccordionItemPropped question={element.question} answer={element.answer} key={`query-${index}`} />
)