module.exports = {
    portalManual: [
        "portal-manual-doc/doc/introduction",
        {
            type: 'category',
            label: 'General',
            items: [
                {
                    type: 'category',
                    label: 'User and Company',
                    items: [
                        "portal-manual-doc/doc/handbook-general/company",
                    ]
                },
                'portal-manual-doc/doc/handbook-general/posoperator',
                'portal-manual-doc/doc/handbook-general/tools',
                'portal-manual-doc/doc/handbook-general/possystems',
                'portal-manual-doc/doc/handbook-general/configuration',
                'portal-manual-doc/doc/handbook-general/shop',
                'portal-manual-doc/doc/handbook-general/knowledgebase'
            ]
        },
        {
            type: 'category',
            label: 'Austria',
            items: [
                'portal-manual-doc/doc/handbook-at/introduction',
                'portal-manual-doc/doc/handbook-at/portal',
                {
                    type: 'category',
                    label: 'User and Company',
                    items: [
                        "portal-manual-doc/doc/handbook-at/registration-login",
                        "portal-manual-doc/doc/handbook-at/dashboard",
                        "portal-manual-doc/doc/handbook-at/user",
                        "portal-manual-doc/doc/handbook-at/company",
                    ]
                },
                'portal-manual-doc/doc/handbook-at/posoperator',
                'portal-manual-doc/doc/handbook-at/tools',
                'portal-manual-doc/doc/handbook-at/configuration',
                'portal-manual-doc/doc/handbook-at/fiskalization',
            ]
        },
        {
            type: 'category',
            label: 'France',
            items: [
                'portal-manual-doc/doc/handbook-fr/introduction',
                'portal-manual-doc/doc/handbook-fr/portal',
                {
                    type: 'category',
                    label: 'User and Company',
                    items: [
                        "portal-manual-doc/doc/handbook-fr/registration-login",
                        "portal-manual-doc/doc/handbook-fr/dashboard",
                        "portal-manual-doc/doc/handbook-fr/user",
                        "portal-manual-doc/doc/handbook-fr/company",
                    ]
                },
                'portal-manual-doc/doc/handbook-fr/posoperator',
                'portal-manual-doc/doc/handbook-fr/tools',
                'portal-manual-doc/doc/handbook-fr/possystems',
                'portal-manual-doc/doc/handbook-fr/configuration',
                'portal-manual-doc/doc/handbook-fr/fiscal-archive'
            ]
        }
    ]
}
