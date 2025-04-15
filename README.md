# Kodeka

[![][Fontbakery]](https://khulnasoft.khulnasoft.io/kodeka-font/fontbakery/fontbakery-report.html)
[![][Universal]](https://khulnasoft.khulnasoft.io/kodeka-font/fontbakery/fontbakery-report.html)
[![][Shaping]](https://khulnasoft.khulnasoft.io/kodeka-font/fontbakery/fontbakery-report.html)

![The words “Kodeka” written as ASCII art in Kodeka Mono resembling Kodeka Sans. After this is a demonstration of Kodeka Sans in regular and bold face that shows alphanumeric characters and some symbols, notably a symbol for Shift, a right arrow, and the Khulnasoft logo. Below is some text written in Kodeka - a heading: “Kodeka truly represents the coding and design spirit within Khulnasoft's creator community.”, one paragraph: “At KhulnaSoft, we've developed Kodeka, a typeface specifically designed for developers and designers. We began by creating a monospace version that prioritized readability and seamlessly integrated into coding environments. After perfecting the monospace variant, we expanded Kodeka into a Sans version, adding versatility to its capabilities.”, and another next to it: “Kodeka embodies our design principles of simplicity, minimalism, and speed, drawing inspiration from the renowned Swiss design movement. With precision, clarity, and functionality at its core, Kodeka enhances the visual experience of developers and designers, empowering them to effectively communicate their ideas.”](./documentation/img/kodeka-banner--light.png#gh-light-mode-only)
![The words “Kodeka” written as ASCII art in Kodeka Mono resembling Kodeka Sans. After this is a demonstration of Kodeka Sans in regular and bold face that shows alphanumeric characters and some symbols, notably a symbol for Shift, a right arrow, and the Khulnasoft logo. Below is some text written in Kodeka - a heading: “Kodeka truly represents the coding and design spirit within Khulnasoft's creator community.”, one paragraph: “At KhulnaSoft, we've developed Kodeka, a typeface specifically designed for developers and designers. We began by creating a monospace version that prioritized readability and seamlessly integrated into coding environments. After perfecting the monospace variant, we expanded Kodeka into a Sans version, adding versatility to its capabilities.”, and another next to it: “Kodeka embodies our design principles of simplicity, minimalism, and speed, drawing inspiration from the renowned Swiss design movement. With precision, clarity, and functionality at its core, Kodeka enhances the visual experience of developers and designers, empowering them to effectively communicate their ideas.”](./documentation/img/kodeka-banner--dark.png#gh-dark-mode-only)

# Kodeka Sans & Kodeka Mono
Kodeka is a new font family for KhulnaSoft, created by [Khulnasoft](https://khulnasoft.com/design) in collaboration with [Basement Studio](https://basement.studio/).

Kodeka Sans is a sans-serif typeface designed for legibility and simplicity. It is a modern, geometric typeface that is based on the principles of [classic Swiss typography](https://en.wikipedia.org/wiki/International_Typographic_Style). It is designed to be used in headlines, logos, posters, and other large display sizes.

Kodeka Mono is a monospaced typeface that has been crafted to be the perfect partner to Kodeka Sans. It is designed to be used in code editors, diagrams, terminals, and other textbased interfaces where code is represented.

### Installation

Download the latest release from the [releases page](https://github.com/khulnasoft/kodeka-font/releases/latest) and install the fonts on your system.

### Inspiration
Kodeka has been influenced and inspired by the following typefaces: [Inter](https://rsms.me/inter/), [Univers](https://www.linotype.com/1212814/univers-family.html), [SF Mono](https://developer.apple.com/fonts/), [SF Pro](https://developer.apple.com/fonts/), [Suisse International](https://www.swisstypefaces.com/fonts/suisse/), [ABC Diatype Mono](https://abcdinamo.com/typefaces/diatype), and [ABC Diatype](https://abcdinamo.com/typefaces/diatype). We thank the creators of these typefaces for their craft.

## Building

Fonts are built automatically by GitHub Actions - take a look in the "Actions" tab for the latest build.

If you want to build fonts manually on your own computer:

* `make build` will produce font files.
* `make test` will run [FontBakery](https://github.com/googlefonts/fontbakery)'s quality assurance tests.
* `make proof` will generate HTML proof files.

The proof files and QA tests are also available automatically via GitHub Actions - look at https://guidoferreyra.github.io/Kodeka.git.

## Changelog

When you update your font (new version or new release), please report all notable changes here, with a date.
Changelog example:

**26 May 2021. Version 2.13**
- MAJOR Font turned to a variable font.
- SIGNIFICANT New Stylistic sets added.

## License

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is available with a FAQ at
https://scripts.sil.org/OFL

## Repository Layout

This font repository structure is inspired by [Unified Font Repository v0.3](https://github.com/unified-font-repository/Unified-Font-Repository), modified for the Google Fonts workflow.
