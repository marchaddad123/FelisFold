const noCrossoriginBeforeSrcRule = {
    meta: {
        type: "problem",
        fixable: "code",
        schema: []
    },
    create(context) {
        if (!context.parserServices?.defineTemplateBodyVisitor) {
            return {}
        }

        return context.parserServices.defineTemplateBodyVisitor({
            VAttribute(node) {
                const attributeName = node.directive
                    ? `:${node.key.argument?.name}`
                    : node.key.name
                const srcAttributes = [
                    "src",
                    ":src",
                    "data-src",
                    ":data-src",
                    "srcset",
                    ":srcset",
                    "data-srcset",
                    ":data-srcset"
                ]

                if (!srcAttributes.includes(attributeName)) return

                const parent = node.parent.parent
                const attributes = parent.startTag.attributes
                const crossoriginAttribute = attributes.find(
                    (attribute) =>
                        attribute.key.name === "crossorigin" ||
                        attribute.key.argument?.name === "crossorigin"
                )

                if (
                    crossoriginAttribute &&
                    attributes.indexOf(crossoriginAttribute) >
                        attributes.indexOf(node)
                ) {
                    context.report({
                        node: crossoriginAttribute,
                        message:
                            "Crossorigin attribute should come before src or srcset attribute due to browser compatibility issues",
                        fix(fixer) {
                            const sourceCode = context.getSourceCode()
                            return [
                                fixer.replaceTextRange(
                                    node.range,
                                    sourceCode.getText(crossoriginAttribute)
                                ),
                                fixer.replaceTextRange(
                                    crossoriginAttribute.range,
                                    sourceCode.getText(node)
                                )
                            ]
                        }
                    })
                }
            }
        })
    }
}

export default {
    rules: {
        "no-crossorigin-before-src": noCrossoriginBeforeSrcRule
    }
}
