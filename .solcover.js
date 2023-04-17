module.exports = {
    skipFiles: [
        'libraries/'
    ],
    istanbulReporter: ['text'], // ['html', 'lcov']
    configureYulOptimizer: true,
    solcOptimizerDetails: {
        // The new Yul optimizer. Mostly operates on the code of ABI coder v2
        // and inline assembly.
        // It is activated together with the global optimizer setting
        // and can be deactivated here.
        // Before Solidity 0.6.0 it had to be activated through this switch.
        yul: true,
        yulDetails: {
            // Improve allocation of stack slots for variables, can free up stack slots early.
            // Activated by default if the Yul optimizer is activated.
            stackAllocation: true
        }
    }
};