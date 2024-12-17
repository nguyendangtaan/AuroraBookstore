<?php $__env->startSection('title'); ?>
    Books
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<div class="row">
    <?php echo $__env->make('admin.layouts.sidebar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <div class="col-md-9">
        <div class="row mt-2">
            <div class="col-md-12">
                <div class="card-header bg-white d-flex justify-content-between align-items-center">
                    <h3 class="mt-2">Books (<?php echo e($books->count()); ?>)</h3>
                    <a href="<?php echo e(route('admin.books.create')); ?>" class="btn btn-sm btn-primary">
                        <i class="fas fa-plus"></i>
                    </a>
                </div>
                <hr>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Author</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Price</th>
                                <th scope="col">Image</th>
                                <th scope="col">Status</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php $__currentLoopData = $books; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $book): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <tr>
                                    <th scope="row"><?php echo e($key += 1); ?></th>
                                    <td><?php echo e($book->book_name); ?></td>
                                    <td>
                                        <?php echo e($book->category); ?>

                                    </td>
                                    <td>
                                        <?php echo e($book->author ? $book->author->author_name : 'N/A'); ?>

                                    </td>
                                    <td><?php echo e($book->book_qty); ?></td>
                                    <td><?php echo e($book->book_price); ?></td>
                                    <td>
                                        <img src="<?php echo e(asset($book->thumbnail)); ?>" alt="<?php echo e($book->thumbnail); ?>" class="img-fluid rounded" width="60" height="60">
                                    </td>
                                    <td>
                                        <?php if($book->status): ?>
                                            <span class="badge bg-success p-2">
                                                Đang bán
                                            </span>
                                        <?php else: ?>
                                            <span class="badge bg-danger p-2">
                                                Tạm ngưng
                                            </span>
                                        <?php endif; ?>
                                    </td>

                                    <td>
                                        <a href="<?php echo e(route('admin.books.edit', $book->slug)); ?>" class="btn btn-sm btn-warning">
                                            <i class="fas fa-edit"></i>
                                        </a>
                                        <a href="#" onclick="deleteItem(<?php echo e($book->book_id); ?>)" class="btn btn-sm btn-danger">
                                            <i class="fas fa-trash"></i>
                                        </a>
                                        <form id="<?php echo e($book->book_id); ?>" action="<?php echo e(route('admin.books.destroy', $book->slug)); ?>" method="post">
                                        <?php echo csrf_field(); ?>
                                        <?php echo method_field('DELETE'); ?>
                                        </form>
                                    </td>
                                </tr>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\AuroraBookstore\Backend\resources\views/admin/books/index.blade.php ENDPATH**/ ?>