module.exports = {
    ping: {
        args: {},
        path: 'ping',
        method: 'GET',
        prefix: null,
        single: false
    },
    Contacts: {
        list: {
            args: {},
            path: 'contacts',
            method: 'GET',
            single: false
        },
        create: {
            args: {},
            path: 'contacts',
            method: 'POST',
            single: false
        } ,
        find: {
            args: {},
            path: 'contacts/search',
            method: 'GET',
            single: false
        },
        get: {
            args: {'id': null},
            path: 'contacts/${id}',
            method: 'GET',
            single: true
        },
        update: {
            args: {'id': null},
            path: 'contacts/${id}',
            method: 'PUT',
            single: false
        },
        delete: {
            args: {'id': null},
            path: 'contacts/${id}',
            method: 'DELETE',
            single: true
        },
        contactLists: {
            args: {'id': null},
            path: 'contacts/${id}/lists',
            method: 'GET',
            single: false
        },
        Customfields: {
            list: {
                args: {},
                path: 'customfields',
                method: 'GET',
                single: false
            },
            create: {
                args: {},
                path: 'customfields',
                method: 'POST',
                single: false
            } ,
            get: {
                args: {'id': null},
                path: 'customfields/${id}',
                method: 'GET',
                single: true
            },
            update: {
                args: {'id': null},
                path: 'customfields/${id}',
                method: 'PUT',
                single: false
            },
            delete: {
                args: {'id': null},
                path: 'customfields/${id}',
                method: 'DELETE',
                single: true
            },
            updateForContact: {
                args: {'id': null},
                path: 'customfields/${id}/update',
                method: 'PUT',
                single: false
            }
        },
        Unsubscribers: {
            list: {
                args: {},
                path: 'unsubscribers',
                method: 'GET',
                single: false
            },
            create: {
                args: {},
                path: 'unsubscribers',
                method: 'POST',
                single: false
            } ,
            get: {
                args: {'id': null},
                path: 'unsubscribers/${id}',
                method: 'GET',
                single: true
            }
        }
    },
    Lists: {
        list: {
            args: {},
            path: 'lists',
            method: 'GET',
            single: false
        },
        create: {
            args: {},
            path: 'lists',
            method: 'POST',
            single: false
        } ,
        find: {
            args: {},
            path: 'lists/search',
            method: 'GET',
            single: false
        },
        get: {
            args: {'id': null},
            path: 'lists/${id}',
            method: 'GET',
            single: true
        },
        update: {
            args: {'id': null},
            path: 'lists/${id}',
            method: 'PUT',
            single: false
        },
        delete: {
            args: {'id': null},
            path: 'lists/${id}',
            method: 'DELETE',
            single: true
        },
        contactsByList: {
            args: {'id': null},
            path: 'lists/${id}/contacts',
            method: 'GET',
            single: true
        },
        assign: {
            args: {'id': null},
            path: 'lists/${id}/contacts',
            method: 'PUT',
            single: false
        },
        unassign: {
            args: {'id': null},
            path: 'lists/${id}/contacts',
            method: 'DELETE',
            single: true
        }
    },
    Messages: {
        bulks: {
            args: {},
            path: 'bulks',
            method: 'GET',
            single: false
        },
        bulk: {
            args: {},
            path: 'bulks/${id}',
            method: 'GET',
            single: true
        },
        chats: {
            args: { },
            path: 'chats',
            method: 'GET',
            single: false
        },
        chat: {
            args: {
                phone: null
            },
            path: 'chats/${phone}',
            method: 'GET',
            single: false
        },
        list: {
            args: {},
            path: 'messages',
            method: 'GET',
            single: false
        },
        send: {
            args: {},
            path: 'messages',
            method: 'POST',
            single: false
        } ,
        price: {
            args: {},
            path: 'messages/price',
            method: 'GET',
            single: false
        },
        find: {
            args: {},
            path: 'messages/search',
            method: 'GET',
            single: false
        },
        get: {
            args: {'id': null},
            path: 'messages/${id}',
            method: 'GET',
            single: true
        },
        delete: {
            args: {'id': null},
            path: 'messages/${id}',
            method: 'DELETE',
            single: true
        },
        Replies: {
            list: {
                args: {},
                path: 'replies',
                method: 'GET',
                single: false
            },
            find: {
                args: {},
                path: 'replies/search',
                method: 'GET',
                single: false
            },
            get: {
                args: {'id': null},
                path: 'replies/${id}',
                method: 'GET',
                single: true
            },
            delete: {
                args: {'id': null},
                path: 'replies/${id}',
                method: 'DELETE',
                single: true
            }
        },
        Schedules: {
            list: {
                args: {},
                path: 'schedules',
                method: 'GET',
                single: false
            },
            get: {
                args: {'id': null},
                path: 'schedules/${id}',
                method: 'GET',
                single: true
            },
            delete: {
                args: {'id': null},
                path: 'schedules/${id}',
                method: 'DELETE',
                single: true
            }
        },
        Sessions: {
            get: {
                args: {'id': null},
                path: 'sessions/${id}',
                method: 'GET',
                single: true
            },
            delete: {
                args: {'id': null},
                path: 'sessions/${id}',
                method: 'DELETE',
                single: true
            },
            messages: {
                args: {},
                path: 'sessions/${id}/messages',
                method: 'GET',
                single: true
            }
        }
    },
    Templates: {
        list: {
            args: {},
            path: 'templates',
            method: 'GET',
            single: false
        },
        create: {
            args: {},
            path: 'templates',
            method: 'POST',
            single: false
        } ,
        find: {
            args: {},
            path: 'templates/search',
            method: 'GET',
            single: false
        },
        get: {
            args: {'id': null},
            path: 'templates/${id}',
            method: 'GET',
            single: true
        },
        update: {
            args: {'id': null},
            path: 'templates/${id}',
            method: 'PUT',
            single: false
        },
        delete: {
            args: {'id': null},
            path: 'templates/${id}',
            method: 'DELETE',
            single: true
        }
    },
    Sources: {
        list: {
            args: {},
            path: 'sources',
            method: 'GET',
            single: false
        },
        Numbers: {
            list: {
                args: {},
                path: 'numbers',
                method: 'GET',
                single: false
            },
            create: {
                args: {},
                path: 'numbers',
                method: 'POST',
                single: false
            },
            find: {
                args: {},
                path: 'numbers/available',
                method: 'GET',
                single: false
            },
            get: {
                args: {'id': null},
                path: 'numbers/${id}',
                method: 'GET',
                single: true
            },
            cancel: {
                args: {'id': null},
                path: 'numbers/${id}',
                method: 'DELETE',
                single: true
            }
        },
        SenderIds: {
            list: {
                args: {},
                path: 'senderids',
                method: 'GET',
                single: false
            },
            create: {
                args: {},
                path: 'senderids',
                method: 'POST',
                single: false
            },
            get: {
                args: {'id': null},
                path: 'senderids/${id}',
                method: 'GET',
                single: true
            },
            delete: {
                args: {'id': null},
                path: 'senderids/${id}',
                method: 'DELETE',
                single: true
            }
        }
    },
    User: {
        invioces: {
            args: {},
            path: 'invoices',
            method: 'GET',
            single: false
        },
        statsMessages: {
            args: {},
            path: 'stats/messaging',
            method: 'GET',
            single: false
        },
        statsSpending: {
            args: {},
            path: 'stats/spending',
            method: 'GET',
            single: false
        },
        timezones: {
            args: {},
            path: 'timezones',
            method: 'GET',
            single: false
        },
        info: {
            args: {},
            path: 'user',
            method: 'GET',
            single: false
        },
        update: {
            args: {'id': null},
            path: 'user',
            method: 'PUT',
            single: false
        },
        invite: {
            args: {},
            path: 'subaccounts',
            method: 'POST',
            single: false
        }
    }
};