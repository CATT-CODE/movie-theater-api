const { check, validationResult } = require('express-validator');

module.exports = {
    validateShowStatus: [
        check('status')
            .trim()
            .notEmpty().withMessage('Status cannot be empty')
            .isLength({ min: 5, max: 25 }).withMessage('Status must be between 5 and 25 characters'),

        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ error: errors.errors[0].msg});
            }
            next();
        }
    ],
    validateShowRating: [
        check('rating')
            .trim()
            .notEmpty().withMessage('Rating cannot be empty')
            .isInt().withMessage('Rating must be an integer'),

        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ error: errors.errors[0].msg});
            }
            next();
        }
    ],
}