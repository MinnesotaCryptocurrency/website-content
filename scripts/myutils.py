import os

def pathify (*parts):
    return os.path.realpath(
        os.path.normpath(os.path.join(*parts))
    )

root = pathify(
    os.path.dirname(__file__),
    "..",
)
