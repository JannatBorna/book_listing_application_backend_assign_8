"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookSearchableFields = exports.bookFilterableFields = exports.categoryPolulate = void 0;
exports.categoryPolulate = { category: true };
exports.bookFilterableFields = [
    'search',
    'minPrice',
    'maxPrice',
    'category',
];
exports.bookSearchableFields = ['title', 'author', 'genre'];
