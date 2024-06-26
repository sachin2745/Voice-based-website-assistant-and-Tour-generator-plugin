'use client'
import React from 'react'
import { Container, Title, Accordion } from "@mantine/core"
import classes from "./faqSection.module.css"

const placeholder =
    "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth."


export default function Faqsection() {
    return (
        <Container size="sm" className={classes.wrapper}>
            <Title ta="center" className={classes.title}>
                Frequently Asked Questions
            </Title>

            <Accordion variant="separated">
                <Accordion.Item className={classes.item} value="reset-password">
                    <Accordion.Control>How does the Voice Assistant work?</Accordion.Control>
                    <Accordion.Panel>Our Voice Assistant utilizes advanced voice recognition technology to interpret user commands and navigate through website content accordingly. Simply activate the assistant and speak your commands to browse effortlessly.</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="another-account">
                    <Accordion.Control>
                    Can I customize the website tours generated by the Tour Generator?
                    </Accordion.Control>
                    <Accordion.Panel>Yes, our Tour Generator allows for full customization of website tours. You can specify the sections you want to include, set preferences for tour duration and pacing, and personalize the tour experience to suit your needs.</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="newsletter">
                    <Accordion.Control>
                    Are the plugins easy to install and use?
                    </Accordion.Control>
                    <Accordion.Panel>Absolutely! Installing and using plugins on our platform is straightforward. Simply browse through the available plugins, select the ones you want to install, and follow the prompts to integrate them into your browsing experience.</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="credit-card">
                    <Accordion.Control>
                    Is the Voice Assistant compatible with all websites?
                    </Accordion.Control>
                    <Accordion.Panel>While our Voice Assistant is designed to work with most websites, there may be some compatibility limitations depending on the website's structure and functionality. However, we continuously strive to improve compatibility and usability across a wide range of websites.</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="payment">
                    <Accordion.Control>
                    How can I provide feedback or report issues with the platform?
                    </Accordion.Control>
                    <Accordion.Panel>We value your feedback and are always here to assist you. Feel free to reach out to our support team through the contact form on our website, and we'll be happy to address any questions, concerns, or feedback you may have.</Accordion.Panel>
                    {/* <Accordion.Panel>{placeholder}</Accordion.Panel> */}
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}
