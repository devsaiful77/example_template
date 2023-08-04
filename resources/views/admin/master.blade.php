<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" />
    <title></title>
    <link rel="stylesheet" href="{{ asset('admin/css/all.min.css') }}">
    <link rel="stylesheet" href="{{ asset('admin/css/fontawesome.min.css') }}">

    <link rel="stylesheet" href="{{ asset('admin/css/others-page.css') }}">
    <link rel="stylesheet" href="{{ asset('admin/css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('admin/css/custom.css') }}">
    <link rel="stylesheet" href="{{ asset('admin/css/responsive.css') }}">

    <style>
        .ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline.ck-blurred {
            height: 100%;
            padding: 10px;
            overflow: hidden;
            display: block;
        }

        /*  */
    </style>
</head>

<body>
    <div id="app">
        <router-view></router-view>
    </div>
    <script src="{{ asset('js/admin.js') }}" type="text/javascript"></script>
</body>

</html>
