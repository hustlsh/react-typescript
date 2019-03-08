module.exports = {
    presets: [
        "@babel/env",
        '@babel/preset-react',
        // typescript
        [
            '@babel/preset-typescript',
            {
                isTSX: true,
                allExtensions: true
            }
        ]
    ]
};